const database = require("../models");

class FindAllService {
  constructor() {
  }

  async buscaTodosRegistros(where = {}) {
    return database.Anuncios.findAll({ where: { ...where } });
  };
};

module.exports = FindAllService;
