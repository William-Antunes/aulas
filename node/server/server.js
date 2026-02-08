const express = require('express')
const app = express()

//          criar   ler   atualizar  deletar
//  CRUD -> CREATE  READ  UPDATE     DELETE
//          POST    GET   PUT        DELETE

// http://meusite.com.br/ <- GET -> entregue a pagina /
// http://meusite.com.br/sobre <- GET -> entregue a pagina /sobre

app.get('/', (req, res) => {
    res.send(`
        <form action = "/" method="POST">
        Nome:<input type="text" name="nome">
        <button>Enviar</button>
        </form>
        `)
})

app.post('/', (req, res) => {
    res.send('Recebi o formulario')
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente')
})
app.listen(3000, () => {
    console.log ('Acessar http://localhost:3000')
    console.log('servidor executando na porta 3000')
})