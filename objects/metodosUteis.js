const pessoa = {nome: 'William', idade: 17}

const outraPessoa = {...pessoa, sobrenome: 'Kauan'}

Object.defineProperty(pessoa, 'nome', {
    value: 'Qualquer coisa',
    writable:    false
})
console.log(Object.getOwnPropertyDescriptor(pessoa, 'nome'
))

// console.log(Object.keys(pessoa))

// outraPessoa.nome = 'Wesley'
// outraPessoa.idade = 16


// console.log(pessoa)
// console.log(outraPessoa)

