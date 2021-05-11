const { ValidationError } = require("sequelize");

class ValidaDataTerminoService {
  constructor(dataInicio, dataTermino) {
    this.dataInicio = dataInicio;
    this.dataTermino = dataTermino;
  }

  validaDataTermino() {
    if (this.dataTermino < this.dataInicio) {
      throw new ValidationError(
        "A data de término deve ser superior ou igual a data de inicio"
      );
    }
  }
}

module.exports = ValidaDataTerminoService;
