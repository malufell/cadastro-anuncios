const VisualizacoesPorCompartilhamento = require("./VisualizacoesPorCompartilhamento");

class TotalVisualizacoesService {
  constructor() {
  };

  calculaTotalVisualizacoes() {
    const visualizacoesAnuncioOriginal = 100;
    const maxCompartilhamentos = 4;
    let visualizacoes = visualizacoesAnuncioOriginal;
    let retorno = 0;

    for (let i = 0; i <= maxCompartilhamentos; i++) {
      visualizacoes = new VisualizacoesPorCompartilhamento(visualizacoes).calculaVisualizacoesPorCompartilhamento();
      retorno += visualizacoes;
    };

    return retorno + visualizacoesAnuncioOriginal;
  };
};

module.exports = TotalVisualizacoesService;