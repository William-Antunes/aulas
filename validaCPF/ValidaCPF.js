function ValidaCPF(cpfenviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable:true, 
        get : function(){
            return cpfenviado.replace(/\D+/g, '')
        }
    })
}

ValidaCPF.prototype.valida = function() {
    if (typeof this.cpfLimpo === 'undefined') return false
    if (this.cpfLimpo.length !== 11) return false
    if (this.isSequencia()) return false 
    const cpfparcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.criaDigito(cpfparcial)
    const digito2 = this.criaDigito(cpfparcial + digito1)
    console.log(digito1)
    console.log(digito2)

    const novoCPF = cpfparcial + String(digito1) + String(digito2)
    return novoCPF === this.cpfLimpo
}
ValidaCPF.prototype.criaDigito = function(cpfparcial){
    const cpfArray = Array.from(cpfparcial)
    let regressivo = cpfArray.length + 1 
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val))
        regressivo --
      return ac  
    }, 0)

    const digito = 11 - ( total % 11)
    return digito > 9 ? 0 : digito
}

ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo
}
const cpf = new ValidaCPF('152.384.726-33')
console.log(cpf.valida())

