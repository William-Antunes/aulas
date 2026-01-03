const relogio = document.querySelector(".relogio")
const iniciar = document.querySelector(".iniciar")
const pausar = document.querySelector(".parar")
const resetar = document.querySelector(".resetar")

function hora(segundos){
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString("pt-BR", {
        hour12: false,
        timeZone: "UTC"
    })
}

let segundos = 0
let timer

function start(){
    clearInterval(timer)
     timer = setInterval(() => {
        segundos++
        relogio.innerHTML = hora(segundos)
    }, 1000);
    relogio.classList.remove("pausado")
}
function pause() {
    setTimeout(() => {
        
    }, );
}

function pause() {
    clearInterval(timer)
    relogio.classList.add("pausado")
}


function reset() {
    clearInterval(timer);
    relogio.innerHTML = "00:00:00"
    segundos = 0
    relogio.classList.remove("pausado")
}
iniciar.addEventListener("click", start)
pausar.addEventListener("click", pause); 
resetar.addEventListener("click", reset)