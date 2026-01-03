function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' '+ this.sobrenome
}


const pessoa1 = new Pessoa('William', 'Silva')
// console.log(pessoa1)
console.log(pessoa1.nomeCompleto())