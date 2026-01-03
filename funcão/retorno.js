// function soma(a, b) {
//     return a + b
// }

// console.log(soma(2, 3))

// // Function inutil pois só exibe o resultado, não retorna nada 
// function soma2(a, b) {
//     console.log(a + b)
// }



// function criaPessoa(nome, sobrenome) {
//     return {nome, sobrenome}
// }

// const p1 = criaPessoa("WIlliam", "Silva")
// const p2 = {
//     nome : 'Lucas',
//     sobrenome : "Gabriel"
// }

// console.log(p1)
// console.log(p2)

// function falaFrase(comeco) {
//     function falaResto(resto) {
//         return resto
//         return comeco + ' ' + resto
// }
//     return falaResto
// }

// const olamundo = falaFrase('Ola')
// const resto = olamundo('mundo')
// console.log(resto)


function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador
    }
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))