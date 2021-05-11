class CalculaCliquesPorVisualizacoesService {
  constructor(visualizacoes) {
    this.visualizacoes = visualizacoes;
  }

  call() {
    const visualizacoesAnuncioOriginal = 100;
    const cliquesAnuncioOriginal = 12;
    const conversaoDeCliques = visualizacoesAnuncioOriginal / cliquesAnuncioOriginal;

    return this.visualizacoes / conversaoDeCliques;
  };
};

module.exports = CalculaCliquesPorVisualizacoesService;
