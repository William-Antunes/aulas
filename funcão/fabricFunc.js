        function criarPessoa(nome, sobrenome, altura, peso) {
            return {
                nome, sobrenome,

                get nomeCompleto() {
                    return `${this.nome} ${this.sobrenome}`
                }
,
                set nomeCompleto(valor) {
                    valor  = valor.split(' ')
                    this.nome = valor.shift()
                    this.sobrenome = valor.join(' ') 
                },

                fala: function(assunto) {
                    return `${this.nome} está falando sobre ${assunto}`
                },
                altura,
                peso,
            get imc(){
                    const indice = this.peso / (this.altura ** 2)
                if (indice >= 18.5 && indice <= 24.49) {
                        console.log('Peso normal')
                } else {
                    console.log('Fora do peso normal')}

                    return indice.toFixed(2) 

            }
        }}

        const p1 = criarPessoa('William', 'Silva', 1.90, 85)
        console.log(p1.fala('JavaScript'))
        // console .log(`${p1.nome} tem um IMC de ${p1.imc()}`)
        console.log(p1.imc)
        console.log(p1.nome)
        console.log(p1.sobrenome)
        // this.nome = p1.nome