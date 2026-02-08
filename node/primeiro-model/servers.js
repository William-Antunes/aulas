require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTIONSTRING).then(() => {
    console.log('conectado')
    app.emit('pronto')
})




const routes = require('./routes')
const path = require('path')

app.use(express.urlencoded({extended: true}))
app.use(routes)
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.resolve(__dirname, 'public')))

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log ('Acessar http://localhost:3000')
        console.log('servidor executando na porta 3000')
})
})
