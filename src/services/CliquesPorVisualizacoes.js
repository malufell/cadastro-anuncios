class CliquesPorVisualizacoesService {
  constructor(visualizacoes) {
    this.visualizacoes = visualizacoes;
  }

  calculaCliquesPorVisualizacoes() {
    const visualizacoesAnuncioOriginal = 100;
    const cliquesAnuncioOriginal = 12;
    const conversaoDeCliques = visualizacoesAnuncioOriginal / cliquesAnuncioOriginal;

    return this.visualizacoes / conversaoDeCliques;
  };
};

module.exports = CliquesPorVisualizacoesService;
