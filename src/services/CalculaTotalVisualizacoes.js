const CalculaVisualizacoesPorCompartilhamentoService = require("./CalculaVisualizacoesPorCompartilhamento");

class CalculaTotalVisualizacoesService {
  constructor() {
  };

  call() {
    const visualizacoesAnuncioOriginal = 100;
    const maxCompartilhamentos = 4;
    let visualizacoes = visualizacoesAnuncioOriginal;
    let retorno = 0;

    for (let i = 0; i <= maxCompartilhamentos; i++) {
      visualizacoes = new CalculaVisualizacoesPorCompartilhamentoService(visualizacoes).call();
      retorno += visualizacoes;
    };

    return retorno + visualizacoesAnuncioOriginal;
  };
};

module.exports = CalculaTotalVisualizacoesService;