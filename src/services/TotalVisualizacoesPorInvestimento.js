const ConversaoVisualizacoesPorInvestimentoService = require("./ConversaoVisualizacoesPorInvestimento");

class TotalVisualizacoesPorInvestimentoService {
  constructor(investimento) {
    this.investimento = investimento;
  }

  calculaTotalVisualizacoesPorInvestimento() {
    const TaxaDeVisualizacoesPorInvestimento = new ConversaoVisualizacoesPorInvestimentoService().calculaConversaoVisualizacoesPorInvestimento();

    return Math.round(this.investimento * TaxaDeVisualizacoesPorInvestimento);
  }
}

module.exports = TotalVisualizacoesPorInvestimentoService;