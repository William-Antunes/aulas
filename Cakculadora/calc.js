function criarCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
        if (e.key === 'Enter') {
            this.realizaConta();
            }}); // <-- fechou o addEventListener
        },

        realizaConta() {
                    try {
                        this.display.value = eval(this.display.value);
                        if (!this.display.value) {
                            alert('Conta inválida');
                        return}
                    } catch (e) {
                        alert('Conta inválida');
                    return }
        },

        clearDisplay() {
            this.display.value = '';
        },

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.display.value = this.display.value.slice(0, -1);
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta()
                }
            btnParaDisplay(valor) {
                this.display.value += valor;
        }
            });
        },


        
    };
}

const calculadora = criarCalculadora();
calculadora.inicia();