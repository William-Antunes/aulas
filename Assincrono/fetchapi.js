// const request = obj => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(obj.method,obj.url,true);
//     xhr.send();

//     xhr.addEventListener('load', () => {
//         if(xhr.status >= 200 && xhr.status < 300) {
//             obj.success(xhr.responseText)
//         }else {
//             obj.error(xhr.statusText)
//         }
//     })
// } 
document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if (tag ==='a') {
        e.preventDefault()
        carregaPagina(el)
    }
})

async function carregaPagina(el) {
    try {
    const href = el.getAttribute('href')
    const response = await fetch(href)

        if (response.status !== 200) throw new Error ('ERROR 404 NOSSO')

    const html = await response.text()

    carregaresultado(html)} catch (e) {
        console.log(e)
    }
}

function carregaresultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}