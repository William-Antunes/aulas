
const Login = require('../models/LoginModel')

exports.login = (req, res) => {
    res.render('login')
}

exports.registerForm = (req, res) => {
    res.render('register')
}

exports.entrar = async (req, res) => {
    try {
        const login = new Login(req.body)
        await login.entrar()
        if(login.errors.length > 0) {
            req.flash('errors', login.errors)
            req.session.save(() => {
                return res.redirect('/login')
            })
            return
        }
        req.session.usuario = login.login
        req.session.save(() => {
            return res.redirect('/')
        })
    } catch(e) {
        console.log(e)
        res.render('404')
    }
}

exports.register = async (req, res) => {
    try {
        const login = new Login(req.body)
        await login.register()
        if(login.errors.length > 0) {
            req.flash('errors', login.errors)
            req.session.save(() => {
                return res.redirect('/login/register')
            })
            return
        }
        req.flash('success', 'Usuário registrado com sucesso')
        req.session.save(() => {
            return res.redirect('/login/')
        })
    }catch(e) {
        console.log(e)
        res.render('404')
    }
}
exports.logout = (req, res) => {
    req.session.destroy()
    res.redirect('/')
}