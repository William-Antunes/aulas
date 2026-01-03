const pessoa = {
  nome : 'William', idade : 17  
}

const pessoa1 = new Object()
pessoa1.nome = 'William'
pessoa1.idade = 17
pessoa1.falarNome = function () {
    return (`${this.nome} é o meu nome`)
}
pessoa1.getDataNascimento = function () {
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}


console.log(pessoa.idade)

// console.log(pessoa1.falarNome())
// console.log(pessoa1.getDataNascimento())

// factory functions

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}
const p1 = criaPessoa('William', 'Silva')
console.log(p1.nomeCompleto())

// constructor functions
function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}
const p2 = new Pessoa('William', 'Silva')
const p3 = new Pessoa('Juliana', 'Carvalho')

console.log(p1)