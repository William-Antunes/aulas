(function(idade, peso, altura) {
const sobrenome = 'Silva';
    function crianome(nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome() {
    console.log(crianome('William'))        
    }


    falaNome()
    console.log(idade, peso, altura)    
})(17, 86, 1,90);

