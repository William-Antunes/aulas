const numeros = [1, 50, 20, 4, 300, 19, 3, 41, 22]

const total = numeros.reduce(function(acumulador, valor, indice, array) {
    if (valor % 2 === 0) acumulador.push(valor)
    return acumulador
}, [])

console.log(total)

const pessoas = [
    {nome: 'Luiz', idade: 41},
    {nome: 'William', idade: 17},
    {nome: 'Aninha', idade: 18},
    {nome:'Wesley', idade: 16},
    {nome:'Juliana', idade: 19 },
    {nome:'Isamara', idade: 18 },
    {nome:'Eliezer', idade: 44},
]                 
const maisVelha = pessoas.reduce(function (acumulador, valor){
    if (acumulador.idade > valor.idade) return acumulador
    return valor
})
console.log(maisVelha)