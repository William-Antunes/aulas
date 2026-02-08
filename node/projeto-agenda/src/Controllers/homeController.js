const Contato = require('../models/ContatoModel')

exports.index = async (req, res) => { 
    const contatos = await Contato.buscaClientes()   
    res.render('index', { contatos })
}
