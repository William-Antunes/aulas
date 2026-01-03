const numeros = [1, 50, 20, 4, 300, 19, 3, 41, 22]

const numerosFIltrados = numeros.filter(valor => valor > 10)

// console.log(numerosFIltrados)

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'William', idade: 17},
    {nome: 'Aninha', idade: 18},
]                                                                                                                                       


const pessoasfiltradas = pessoas.filter(valor => valor.nome.length > 5)
console.log(pessoasfiltradas)
const idades = pessoas.filter (valor => valor.idade >= 18)
console.log(idades)
const terminaComA = pessoas.filter (valor => valor.nome.toLowerCase().endsWith('a'))
console.log(terminaComA)