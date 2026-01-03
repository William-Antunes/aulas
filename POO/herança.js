    class DispositivoEletrico {
        constructor(nome){
            this.nome = nome
            this.ligado = false
        }
        ligar(){
            if (this.ligado) {
                console.log('Dispositivo ja esta ligado')
                return
            }
            this.ligado = true
        }
        desligar() {
            if(!this.ligado) {
                console.log('O dispositivo ja esta desligado')
            } this.ligado = false
        }

    }   
    const d1 = new DispositivoEletrico('Smartphone')
    d1.ligar()
    // console.log(d1)
    
    class Smartphone extends DispositivoEletrico{
        constructor(nome, cor, modelo){
            super(nome)
            this.cor = cor
            this.modelo = modelo
        }
    }
    s1 = new Smartphone('Samsung', 'Preto', 'S 23')
    console.log(s1)

