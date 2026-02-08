function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== "string") reject('BAD VALUE')
    setTimeout(() => {
        resolve(msg)
    }, tempo);
    })

}

esperaAi("Buscando dados da base", rand(1, 3)).then(resposta => {
    console.log(resposta)
    return esperaAi(12313, rand(1, 3)).then(resposta => {
        console.log(resposta)
        return esperaAi('COnexão com o BD', rand(1, 3)).then(resposta => {
            console.log(resposta)
        }
        )
    })
}).catch(e => {
    console.log('ERRO', e)
})