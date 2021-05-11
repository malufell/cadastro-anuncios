const TotalVisualizacoesService = require("./TotalVisualizacoes");

class ConversaoVisualizacoesPorInvestimentoService {
  constructor(visualizacoes) {
    this.visualizacoes = visualizacoes;
  }

  calculaConversaoVisualizacoesPorInvestimento() {
    const visualizacoesAnuncioOriginal = 100;
    const investimentoBase = 1;
    const visualizacoesPorInvestimentoBase = 30;
    const investimentoPorVisualizacao = investimentoBase / visualizacoesPorInvestimentoBase;
    const alcanceTotalDeVisualizacoes = new TotalVisualizacoesService(visualizacoesAnuncioOriginal).calculaTotalVisualizacoes();

    return alcanceTotalDeVisualizacoes / (visualizacoesAnuncioOriginal * investimentoPorVisualizacao);
  };
};

module.exports = ConversaoVisualizacoesPorInvestimentoService;
