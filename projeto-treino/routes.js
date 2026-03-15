const express = require('express')
const route = express.Router()
const homeController = require('./src/Controllers/homeController') 
const loginController = require('./src/Controllers/loginController')
const treinosController = require('./src/Controllers/treinosController')
const { loginRequired } = require('./src/middlewares/middleware')



route.get('/', homeController.paginaInicial)

// Rotas de login
route.get('/login', loginController.login)
route.get('/login/register', loginController.registerForm)
route.post('/login/login', loginController.entrar)
route.post('/login/register', loginController.register)
route.get('/logout', loginController.logout)

// Rota de treinos
route.get('/treinos', loginRequired, treinosController.criarTreino)


module.exports = route
