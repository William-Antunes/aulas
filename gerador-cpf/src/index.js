import GeraCPF from './modules/geracpf.js'

import './model0.css'

function cpf() {
    const cpfGerado = document.querySelector('.cpf-gerado');
    const gera = new GeraCPF();
    cpfGerado.innerHTML = gera.geraNovoCPF();
}

cpf()