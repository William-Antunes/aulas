const numeros = [1, 50, 20, 4, 300, 19, 3, 41, 22]

const dobro = numeros.map(valor => valor * 2)
console.log(dobro)

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'William', idade: 17},
    {nome: 'Aninha', idade: 18},
]

const nomes = pessoas.map(valor => valor.nome)
const idades = pessoas.map(valor => ({idade : valor.idade}))
const comIDs = pessoas.map(function(valor, indice) {
    const newValue = {...valor}
    newValue.id = indice
    return newValue
})


// console.log(idades) 
console.log(comIDs)