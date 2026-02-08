// const multi = require("./mod2")

// console.log(multi(5, 2))


const Cachorro = require("./mod2")

const cachorrinho = new Cachorro('Kora')
cachorrinho.latir()

const path = require('path')
console.log(path.resolve(__dirname))
