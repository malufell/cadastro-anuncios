const CliquesPorVisualizacoesService = require("./CliquesPorVisualizacoes");

class CompartilhamentosPorCliquesService {
  constructor(visualizacoes) {
    this.visualizacoes = visualizacoes;
  }

  calculaCompartilhamentosPorCliques() {
    const cliquesNoAnuncio = 20;
    const compartilhamentos = 3;
    const conversaoCompartilhamentoPorClique = cliquesNoAnuncio / compartilhamentos;
    const cliquesPorVisualizacoes = new CliquesPorVisualizacoesService(this.visualizacoes).calculaCliquesPorVisualizacoes();

    return cliquesPorVisualizacoes / conversaoCompartilhamentoPorClique;
  };
};

module.exports = CompartilhamentosPorCliquesService;
