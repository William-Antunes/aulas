exports.paginaInicial = (req, res) => {
    res.render('index')
}

exports.tratapost = (req, res) => {
    res.send('Sou sua nova rota de post')
}

