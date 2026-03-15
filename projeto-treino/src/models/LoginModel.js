const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs')


const loginSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password : {type: String, required: true}
})

const loginModel = mongoose.model('login', loginSchema)

class Login {
    constructor(body) {
        this.body = body
        this.errors = []
        this.login = null
    }

    async register() {
        this.valida()
        if(this.errors.length > 0) return

        await this.userExists()
        if(this.errors.length > 0) return

        const salt = bcryptjs.genSaltSync()
        this.body.password = bcryptjs.hashSync(this.body.password, salt)

        this.login = await loginModel.create(this.body) 
        
    }
    valida() {
        this.cleanUp()
            if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido')
                if(this.body.password.length < 3 || this.body.password.length > 50) {
                    this.errors.push('A senha precisa conter entre 3 e 50 caracteres')
                }
    }
    cleanUp() {
        for(const key in this.body) {
            if(typeof this.body[key] !== 'string'){
                this.body[key] = ''
            }
        }
    }
    async entrar() {
        this.valida()
        if(this.errors.length > 0) return
        this.login = await loginModel.findOne({email: this.body.email})
        if(!this.login) {
            this.errors.push('Usuário não existe')
            return
        }
        if(!bcryptjs.compareSync(this.body.password, this.login.password)) {
            this.errors.push('Senha inválida')
            this.login = null
            return
        }
    }
    async userExists() {
        const user = await loginModel.findOne({email: this.body.email})
        if(user) this.errors.push('Usuário já existe')
}
}

module.exports = Login


