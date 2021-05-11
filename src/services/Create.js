const database = require('../models');

class CreateService {
  constructor() {
  };

  async criaRegistro(dados) {
    return database.Anuncios.create(dados)
  };
};

module.exports = CreateService;