class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }
    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handlesubmit(e)
            })
        }
        handlesubmit(e) {
                e.preventDefault()
             const isValid = this.checkfield()  
             const senhavalida = this.senhasValidas()

             if(isValid  && senhavalida) {
                alert('Formulario enviado')
                this.formulario.submit()
             }
        }

        senhasValidas() {
            let valid = true
            const senha = this.formulario.querySelector('.senha')
            const repetirSenha = this.formulario.querySelector('.confirmar-senha')

            if(senha.value !== repetirSenha.value) {
                valid = false
                this.CriaErro(senha, 'Campos senha e confirmar senha devem ser iguais')
                this.CriaErro(repetirSenha, 'Campos senha e confirmar senha devem ser iguais')
            }
            if(senha.value.length < 6 || senha.value.length > 12) {
                valid = false
                this.CriaErro(senha, 'Senha precisa ter entre 6 e 12 caracteres')
            }

            return valid
        }

        checkfield() {
            let valid = true
            
            for (let errortext of this.formulario.querySelectorAll('.error-text')) {
                errortext.remove()
            }

            for (let campo of this.formulario.querySelectorAll('.validar')){
                const label = campo.previousElementSibling.innerHTML
                if(!campo.value ) {
                    this.CriaErro(campo, `Campo ${label} não pode estar em branco`)
                    valid = false
                }
                if(campo.classList.contains('cpf')){
                    if(!this.ValidaCPF(campo)) valid = false
                }
                if(campo.classList.contains('usuario')){
                    if(!this.validaUsuario(campo)) valid = false
                }
            }
            return valid
                }

        validaUsuario(campo) {
            const usuario = campo.value
            let valid = true

            if (usuario.length < 3 || usuario.length > 12) {
                this.CriaErro(campo, 'Usuario precisa ter entre 3 e 12 caracteres')
                valid = false
            }
            if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
                this.CriaErro(campo, 'Usuario precisa conter apenas letras e numeros')
                valid = false
            }

            return valid 

        }

        ValidaCPF(campo) {
            const cpf = new validaCPF(campo.value)
            if (!cpf.valida()){
                this.CriaErro(campo, 'CPF invalido')
                return false
            }
            return true
        }       


        CriaErro(campo, msg) {
            const div = document.createElement('div')
            div.innerHTML = msg
            div.classList.add('error-text')

            campo.insertAdjacentElement('afterend', div)
        }
    }



const valida = new ValidaFormulario()