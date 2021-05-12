const database = require("../models");
const FormataNumeroEmMoedaService = require('../services/FormataNumeroEmMoeda');
const CriaQueryBuscaService = require('../services/CriaQueryBusca');

class Anuncios {

  static async criaRegistro(req, res) {  
    const novoAnuncio = req.body;

    try {
      await database.Anuncios.create(novoAnuncio);
      return res.redirect('/');

    } catch (error) {
      const errors = error.message.split(',');
      const mensagens = errors.map(function (erro) { return erro.replace(/Validation error: /i, "") });
      return res.render('cadastro', { error: mensagens, dados: req.body });
    };
  };

  static async buscaRegistros(req, res) {
    const busca = req.query.q ? req.query.q : "";
    const { dataInicio, dataTermino } = req.query;   
    const whereCondicoes = new CriaQueryBuscaService(busca, dataInicio, dataTermino).call();

    try {
      let anuncios = await database.Anuncios.findAll({ where: whereCondicoes });

      anuncios = anuncios.map(function (anuncio) {
        anuncio.investimentoTotal = new FormataNumeroEmMoedaService(anuncio.investimentoTotal).call();
        anuncio.investimentoDia = new FormataNumeroEmMoedaService(anuncio.investimentoDia).call();
        return anuncio;
      });

      const anuncioNaoEncontrado = ((busca || dataInicio || dataTermino) && anuncios.length == 0);

      return res.render("index", { 
        anuncios: anuncios, 
        cliente: busca, 
        dataInicio: dataInicio, 
        dataTermino: dataTermino,
        anuncioNaoEncontrado: anuncioNaoEncontrado
      });

    } catch (error) {
      return res.status(500).json(error.message); 
    };
  };
};

module.exports = Anuncios;
