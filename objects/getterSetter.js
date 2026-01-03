function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        configurable: true,  //configuravel
        get: function(){
            return estoque
        },set: function(valor) {
            if (typeof valor !== "number") {
                throw new TypeError('Mensagem')
                console.log(valor)
            }
        }
    })

    p1.estoque = "Oque eu quiser"
}

// const p1 = new Produto('Camiseta', 40, 5)
// console.log(p1) 
// console.log(Object.keys(p1))

// for (let chave in p1) {
//     console.log(chave)
// }

function criaProduto() {
    return {
        get nome() {
            return nome
        }, set nome(valor) {
            valor = valor.replace('coisa', '')
            nome = valor
        }
    }
}

const p2 = criaProduto('Camiseta')
p2.nome = 'Qualquer coisa'
console.log(p2.nome)