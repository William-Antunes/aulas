const numeros = [1, 50, 20, 4, 300, 19, 3, 41, 22]

const numerosPares = numeros.filter(valor => valor % 2 === 0).map(valor => valor * 2).reduce((acumulador, valor) =>
 acumulador + valor
, 0)

console.log(numerosPares)