const CalculaTotalVisualizacoesService = require("./CalculaTotalVisualizacoes");

class CalculaConversaoVisualizacoesPorInvestimentoService {
  constructor(visualizacoes) {
    this.visualizacoes = visualizacoes;
  }

  call() {
    const visualizacoesAnuncioOriginal = 100;
    const investimentoBase = 1;
    const visualizacoesPorInvestimentoBase = 30;
    const investimentoPorVisualizacao = investimentoBase / visualizacoesPorInvestimentoBase;
    const alcanceTotalDeVisualizacoes = new CalculaTotalVisualizacoesService(visualizacoesAnuncioOriginal).call();

    return alcanceTotalDeVisualizacoes / (visualizacoesAnuncioOriginal * investimentoPorVisualizacao);
  };
};

module.exports = CalculaConversaoVisualizacoesPorInvestimentoService;