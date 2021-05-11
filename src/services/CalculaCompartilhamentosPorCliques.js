const CalculaCliquesPorVisualizacoesService = require("./CalculaCliquesPorVisualizacoes");

class CalculaCompartilhamentosPorCliquesService {
  constructor(visualizacoes) {
    this.visualizacoes = visualizacoes;
  }

  call() {
    const cliquesNoAnuncio = 20;
    const compartilhamentos = 3;
    const conversaoCompartilhamentoPorClique = cliquesNoAnuncio / compartilhamentos;
    const cliquesPorVisualizacoes = new CalculaCliquesPorVisualizacoesService(this.visualizacoes).call();

    return cliquesPorVisualizacoes / conversaoCompartilhamentoPorClique;
  };
};

module.exports = CalculaCompartilhamentosPorCliquesService;
