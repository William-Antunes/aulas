const HomeModel = require('../models/HomeModel')

    HomeModel.create({
        titulo: 'Um titulo de testes',
        descricao: 'Uma descrição de testes'
    }).then(dados => console.log(dados)).catch(e => console.log(e))
    
exports.paginaInicial = (req, res) => {

    res.render('index')
}

exports.tratapost = (req, res) => {
    res.send('Sou sua nova rota de post')
}

