import geraSenha from './geradores.js'


const senhagerada = document.querySelector('.senha-gerada')
const qtdcaracteres = document.querySelector('.qtd-caracteres')
const chkmaisculas = document.querySelector('.chk-maisculas')
const chkminusculas = document.querySelector('.chk-minusculas')
const chknumeros = document.querySelector('.chk-numeros')
const chksimbolos = document.querySelector('.chk-simbolos')
const gerarsenha = document.querySelector('.gerar-senha')

export default function formGeraSenha() {
    gerarsenha.addEventListener('click', () => {
        senhagerada.innerHTML = gera()
    })
}

function gera() {
    const senha = geraSenha(
        qtdcaracteres.value,
        chkmaisculas.checked,
        chkminusculas.checked,
        chknumeros.checked,
        chksimbolos.checked
    )
    return senha
}

