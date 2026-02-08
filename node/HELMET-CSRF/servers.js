require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {checkcsrferror, csfrmiddleware} = require('./src/middlewares/middleware')
mongoose.connect(process.env.CONNECTIONSTRING).then(() => {
    console.log('conectado')
    app.emit('pronto')
})

const session = require('express-session')
const MongoStore = require('connect-mongo').default;
const flash = require('connect-flash')
const routes = require('./routes')
const path = require('path')
const helmet = require('helmet')
const csrf = require('csurf')

const sessionOptions = session({
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
});
app.use(helmet())
app.use(sessionOptions)
app.use(flash())
    
app.use(csrf())
app.use(checkcsrferror)
app.use(csfrmiddleware)
app.use(express.urlencoded({extended: true}))
app.use(express.json())
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
