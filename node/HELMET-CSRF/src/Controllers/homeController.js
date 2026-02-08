
const HomeModel = require('../models/HomeModel')

    
exports.paginaInicial = (req, res) => { 
    res.render('index', {
        titulo: 'Este será o titulo da pagina',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    })
}
// 
exports.tratapost = (req, res) => {
    res.send('Sou sua nova rota de post')
}

