// function funcao() {
//     let total = 0
//     for(let argumento of arguments) {
//         total += argumento
//     }
//         console.log(total)
//     }



// funcao(1, 2, 3, 4, 5, 6)




// function funcao2(a, b = 2, c = 20) {
//     console.log(a + b + c) 
// }
// funcao2(2, undefined, 30)


// function funcao3({nome, sobrenome, idade}) {
//     console.log(nome, sobrenome, idade)
// }

// funcao3({nome: 'William', sobrenome: 'Silva', idade: 17})


function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === "+") acumulador += numero
        if (operador === "-") acumulador -= numero
        if (operador === "*") acumulador *= numero
        if (operador === "/") acumulador /= numero
    }

    console.log(acumulador)
}

conta('+', 0, 10, 20, 30, 40, 50)




