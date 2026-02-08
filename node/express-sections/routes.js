const express = require('express')
const route = express.Router()
const homeController = require('./src/Controllers/homeController') 

function meuMiddleware(req, res, next) {
    console.log()
    console.log('Passei no seu middleware')
    console.log()
    next()
}
route.get('/',meuMiddleware ,homeController.paginaInicial, function(req, res, next){
    console.log()
    console.log('Ainda estou aqui')
})

route.post('/', homeController.tratapost)



module.exports = route



