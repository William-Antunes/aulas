function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.random() * (max - min) + min
}


function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Bad Value')
                return
            }
            resolve(msg.toUpperCase() + ' - Passei na promise')
        }, tempo)
    })
}

async function executa() {
    try {
    const fase1 = await esperaAi('fase 1', rand(1, 3))
    console.log(fase1)

    const fase2 = await esperaAi('fase 2', rand(1, 3))
    console.log(fase2)

    const fase3 = await esperaAi('fase 3', rand(1, 3))
    console.log(fase3)

    console.log('Termianos na fase', fase3)
    }
    catch(e) {
        console.log(e)
    }
}

executa()  