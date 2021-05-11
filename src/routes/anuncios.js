const express = require('express');
const router = express.Router();
const Anuncios = require('../controllers/anuncios');

router.get('/', Anuncios.buscaRegistros);

router.get('/cadastro', function(req, res) {
    res.render('cadastro', { error: false, dados: {} })
});

router.post('/cadastro', Anuncios.criaRegistro);

module.exports = router;