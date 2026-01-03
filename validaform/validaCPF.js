class validaCPF {
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }

    valida(){
        if (this.cpfLimpo.length !== 11)return false
        if (typeof this.cpfLimpo !== 'string') return false
        if (this.sequencia()) return false
        this.geraCPF()

        return this.novoCPF === this.cpfLimpo
    }

    sequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
    }

    geraCPF() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2)
        const digito1 = this.geraDigito(cpfSemDigitos)
        const digito2 = this.geraDigito(cpfSemDigitos+ digito1)
        this.novoCPF = cpfSemDigitos + digito1 + digito2

    }

    geraDigito(cpfSemDigitos) {
        let total = 0
        let reverso = cpfSemDigitos.length + 1 
        for (let i of cpfSemDigitos) {
            total += reverso * Number(i)
            reverso--
        }
        const digito = 11 - (total % 11)
        return digito > 9 ? '0' : String(digito)
    }

}


const cpf = new validaCPF('138.895.716-70')
console.log(cpf.valida())