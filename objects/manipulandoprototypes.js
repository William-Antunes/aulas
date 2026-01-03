const objA = {
    chaveA: 'A'
}

 const objB = {
    chaveB: 'B'
}

Object.setPrototypeOf(objB, objA) //transforma o prototype do B para ser o mesmo do prototype do A
// console.log(objB.chaveA)

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}
Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('Camiseta', 50)
// p1.aumento()
// p1.desconto(10)
console.log(p1)

const p2 = {
    nome : 'Caneca',
    preco : 15
}

Object.setPrototypeOf(p2, Produto.prototype)
p2.aumento(20)
console.log(p2)