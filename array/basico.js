const nomes = ['Ana', 'Ju', 'Leo', 'Paula'];

nomes[2] = 'William'
// delete nomes[1]


// const novo = nomes
const novo = [...nomes] // agora novo n afeta o valor de nomes quando modificado
const removido = novo.pop() //remove o ultimo elemento do array e retorna ele
const remover = novo.shift() //remove o primeiro elemento do array e retorna ele
novo.push('Luiza') //adiciona um elemento no final do array
novo.unshift('Fabio') //adiciona um elemento no inicio do array
const cortar = novo.slice(1, 3) //corta o array do indice 1 ao 3 (3 n incluso)
const fatiar = novo.slice(0, -1) //corta o array do indice 0 ao penultimo elemento
console.log(nomes)


const nome2 = 'William Antunes da Silva'

const nome = nome2.split(' ') // separa a partir do espaço e cria um array

console.log(nome)

const nome3 = nome.join(' ') // junta os elementos do array em uma string, separando por espaço



