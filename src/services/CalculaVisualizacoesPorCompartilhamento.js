const CalculaCompartilhamentosPorCliquesService = require("./CalculaCompartilhamentosPorCliques");

class CalculaVisualizacoesPorCompartilhamentoService {
  constructor(visualizacoes) {
    this.visualizacoes = visualizacoes;
  }

  call() {
    const visualizacoesPorCompartilhamento = 40;
    const compartilhamentos = new CalculaCompartilhamentosPorCliquesService(this.visualizacoes).call();

    return compartilhamentos * visualizacoesPorCompartilhamento;
  }
}

module.exports = CalculaVisualizacoesPorCompartilhamentoService;
