const database = require('../models');

class CreateService {
  constructor(nomeDoModelo) {
    this.nomeDoModelo = nomeDoModelo
  };

  async criaRegistro(dados) {
    return database.Anuncios.create(dados)
  };
};

module.exports = CreateService;