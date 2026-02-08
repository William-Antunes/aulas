
const HomeModel = require('../models/HomeModel')

    
exports.paginaInicial = (req, res) => {
    console.log(req.session.usuario) 
    res.render('index')
}

exports.tratapost = (req, res) => {
    res.send('Sou sua nova rota de post')
}

