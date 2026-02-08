require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const helmet = require('helmet')
const csrf = require('csurf')
const session = require('express-session')
const MongoStore = require('connect-mongo').default
const flash = require('connect-flash')

const routes = require('./routes')
const { checkcsrferror, csfrmiddleware, middlewareGlobal } = require('./src/middlewares/middleware')

/* -------------------- CONEXÃO COM O BANCO -------------------- */
mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    console.log('MongoDB conectado')
    app.emit('pronto')
  })
  .catch(e => console.log(e))

/* -------------------- MIDDLEWARES GLOBAIS -------------------- */
app.use(helmet())

// Body parser (ANTES do CSRF)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Session
app.use(session({
  secret: 'kasdjaksdjh kjasdhakh khdasd sad',
  store: MongoStore.create({
    mongoUrl: process.env.CONNECTIONSTRING
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
}))

// Flash messages
app.use(flash())

// CSRF (DEPOIS do body + session)
app.use(csrf())
app.use(checkcsrferror)
app.use(csfrmiddleware)
app.use(middlewareGlobal)

/* -------------------- VIEWS E ARQUIVOS ESTÁTICOS -------------------- */
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.resolve(__dirname, 'public')))

/* -------------------- ROTAS -------------------- */
app.use(routes)

/* -------------------- SERVIDOR -------------------- */
app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Servidor rodando 🚀')
    console.log('Acessar: http://localhost:3000')
  })
})
