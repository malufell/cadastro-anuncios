const CalculaConversaoVisualizacoesPorInvestimentoService = require("./CalculaConversaoVisualizacoesPorInvestimento");

class CalculaTotalVisualizacoesPorInvestimentoService {
  constructor(investimento) {
    this.investimento = investimento;
  }

  call() {
    const TaxaDeVisualizacoesPorInvestimento = new CalculaConversaoVisualizacoesPorInvestimentoService().call();

    return Math.round(this.investimento * TaxaDeVisualizacoesPorInvestimento);
  }
}

module.exports = CalculaTotalVisualizacoesPorInvestimentoService;