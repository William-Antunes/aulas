function Produto(nome, preco) {
    this.nome = nome,
    this.preco = preco
}

Produto.prototype.aumento(valor){
    this.preco = this.preco + (this.preco * (valor/100))
}
Produto.prototype.desconto(valor){
    this.preco = this.preco - (this.preco * (valor/100))
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque
        }, set: function(valor){
            if (typeof valor !== 'number') return
            estoque = valor
        }
    })
}
Caneca.prototype = Object.prototype(Produto.prototype)
Caneca.prototype.constructor = Caneca

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

const camiseta = new Camiseta('Regata', 20, 'preta')

