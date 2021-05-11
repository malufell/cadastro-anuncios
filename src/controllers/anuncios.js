const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const CreateService = require('../services/Create');
const createService = new CreateService();
const FindAllService = require('../services/FindAll');
const findAllService = new FindAllService();
const FormataNumeroEmMoedaService = require('../services/FormataNumeroEmMoeda');


class Anuncios {

  static async criaRegistro(req, res) {  
    const novoAnuncio = req.body;

    try {
      await createService.criaRegistro(novoAnuncio);
      return res.redirect('/');

    } catch (error) {
      const errors = error.message.split(',');
      const mensagens = errors.map(function (erro) {
          return erro.replace(/Validation error: /i, "")
      });
      return res.render('cadastro', { error: mensagens, dados: req.body });
    };
  };

  static async buscaRegistros(req, resp) {
    const busca = req.query.q ? req.query.q : "";
    const { dataInicio, dataTermino } = req.query;

    const whereCondicoes = {
      cliente: { [Op.iLike]: "%" + busca + "%" },
    };

    dataInicio ? (whereCondicoes.dataInicio = {}) : null;
    dataTermino ? (whereCondicoes.dataTermino = {}) : null;

    if (dataInicio && dataTermino) {
      whereCondicoes.dataInicio[Op.gte] = dataInicio;
      whereCondicoes.dataTermino[Op.lte] = dataTermino;
    } else if (dataInicio && !dataTermino) {
      whereCondicoes.dataInicio[Op.eq] = dataInicio;
    } else if (dataTermino && !dataInicio) {
      whereCondicoes.dataTermino[Op.eq] = dataTermino;
    };
    
    try {
      let anuncios = await findAllService.buscaTodosRegistros(whereCondicoes);
      const anuncioNaoEncontrado = ((busca || dataInicio || dataTermino) && anuncios.length == 0);

      anuncios = anuncios.map(function (anuncio) {
        anuncio.investimentoTotal = new FormataNumeroEmMoedaService(anuncio.investimentoTotal).call();
        anuncio.investimentoDia = new FormataNumeroEmMoedaService(anuncio.investimentoDia).call();
        return anuncio;
      });

      return resp.render("index", { 
        anuncios: anuncios, 
        cliente: busca, 
        dataInicio: dataInicio, 
        dataTermino: dataTermino,
        anuncioNaoEncontrado: anuncioNaoEncontrado
      });

    } catch (error) {
      return resp.status(500).json(error.message); 
    };
  };
};

module.exports = Anuncios;
