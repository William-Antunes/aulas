function Calculadora() {
    this.display = document.querySelector('.display');


    this.capturaCLiques = () => {
        document.addEventListener('click', e => {
            const el = e.target
            if (el.classList.contains('btn-num')) {
                this.btnParaDisplay(el)
            } if (el.classList.contains('btn-clear')) {
                this.apagarDisplay()
            } if (el.classList.contains('btn-del')) {
                this.display.value = this.display.value .slice(0, -1)
            } if (el.classList.contains('btn-eq')) {
                this.realizaConta()
            }
        })
    }
    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value)

            if (!conta) {
                alert('Conta inválida')
                return
            }
        }catch (e) {
            alert('Conta invalida')
        }
    }

    this.apagarDisplay = () => {
        this.display.value = ""
    }

    this.btnParaDisplay = el => {
        this.display.value += el.innerText
        this.display.focus()
    }

    this.inicia = () => {
        this.capturaCLiques()
        this.pressionaEnter()

    }

this.capturaEnter = () => {
    this.document.addEventListener('keyup', e => {
        if (e.key === 'Enter') {
            this.realizaConta()
        }
    })
}







}

const calculadora = new Calculadora()
calculadora.inicia()