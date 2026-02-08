const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`
        <form action = "/" method="POST">
        Nome:<input type="text" name="nome">
        <button>Enviar</button>
        </form>
        `)
})

app.use(express.urlencoded({extended: true}))

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`O q vc me enviou foi  ${req.body.nome}`)
})

app.get('/testes', (req, res) => {
    console.log(req.query)
    res.send(req.query)
})


app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente')
})
app.listen(3000, () => {
    console.log ('Acessar http://localhost:3000')
    console.log('servidor executando na porta 3000')
})