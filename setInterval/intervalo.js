function mostrahora() {
    let data = new Date()

    return data.toLocaleTimeString("pt-BR", {
        hour12: false
    })
}

const timer = setInterval(() => {
    console.log(mostrahora())
}, 1000);

setTimeout(() => {
    clearInterval(timer)
}, 4000);

setTimeout(() => {
    console.log("Ola mundo")
}, 6000);