const CalculaConversaoVisualizacoesPorInvestimentoService = require("./CalculaConversaoVisualizacoesPorInvestimento");

class CalculaTotalVisualizacoesPorInvestimentoService {
  constructor(investimento) {
    this.investimento = investimento;
  }

  call() {
    const taxaDeVisualizacoesPorInvestimento = new CalculaConversaoVisualizacoesPorInvestimentoService().call();

    return this.investimento * taxaDeVisualizacoesPorInvestimento;
  };
};

module.exports = CalculaTotalVisualizacoesPorInvestimentoService;