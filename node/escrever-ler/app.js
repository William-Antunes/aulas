const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'teste.json')
const escreve = require('./escrever')
const ler = require('./ler')

const pessoas = [
    {nome:  "João"},
    {nome:  "Pedro"},
    {nome:  "Maria"},
    {nome:  "Isamara"},
    {nome:  "Wesley"}
]

const json = JSON.stringify(pessoas, "", 2)

// escreve(caminhoArquivo, json)
async function leArquivo(caminho) {
   const dados = await ler(caminho)
   return dados
}

const dadosArquivo = leArquivo(caminhoArquivo).then(dados => console.log(dados))

// JSON.parse