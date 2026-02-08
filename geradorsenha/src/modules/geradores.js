const rand = (min, max) => {
    return Math.floor(Math.random() * (max = min) + min)
}
const geraMaiscula = () => String.fromCharCode(rand(65, 91))
const geraMinuscula = () => String.fromCharCode(rand(97, 123))
const geraNumero = () => String.fromCharCode(rand(48, 58))
const simbolos = ',.;~^[]{}!@#$%&*()-_=+<>?/|'
const geraSimbolo = () => simbolos[rand(0, simbolos.length)]

export default function gerasenha(qtd, maiscula, minuscula, numero, simbolos) {
    const senhaArray = []
    qtd = Number(qtd)


    for (let i = 0; i < qtd; i++) {
    maiscula && senhaArray.push(geraMaiscula())
     minuscula && senhaArray.push(geraMinuscula())
     numero && senhaArray.push(geraNumero())
     simbolos && senhaArray.push(geraSimbolo())
    }

    return senhaArray.join('').slice(0, qtd)
}
