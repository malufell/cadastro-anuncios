const CompartilhamentosPorCliquesService = require("./CompartilhamentosPorCliques");

class VisualizacoesPorCompartilhamento {
  constructor(visualizacoes) {
    this.visualizacoes = visualizacoes;
  }

  calculaVisualizacoesPorCompartilhamento() {
    const visualizacoesPorCompartilhamento = 40;
    const compartilhamentos = new CompartilhamentosPorCliquesService(this.visualizacoes).calculaCompartilhamentosPorCliques();

    return compartilhamentos * visualizacoesPorCompartilhamento;
  }
}

module.exports = VisualizacoesPorCompartilhamento;
