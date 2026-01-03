 function retornaFuncao() {
    const nome = 'WIlliam';
    return function() {
        return nome;
    } }

    const funcao = retornaFuncao()
    console.log(funcao) // [Function (anonymous)]
    console.log(funcao()) // WIlliam