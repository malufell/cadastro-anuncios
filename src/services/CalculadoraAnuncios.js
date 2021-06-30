class CalculadoraAnunciosService {
  constructor(investimento) {
    this.investimento = investimento;
  }

  call() {
    const qntVisualizacoesPorInvestimento = 30;
    const taxaDeCliques = 12 / 100; // a cada 100 pessoas que visualizam o anúncio 12 clicam nele
    const taxaDeCompartilhamentos = 3 / 20; // a cada 20 pessoas que clicam no anúncio 3 compartilham
    const maximoDeCompartilhamentos = 4; // o mesmo anúncio é compartilhado no máximo 4 vezes em sequência
    const totalVisualizacoesPorCompartilhamento = 40;

    let visualizacoes = this.investimento * qntVisualizacoesPorInvestimento;
    let cliques = visualizacoes * taxaDeCliques;
    let compartilhamentos = cliques * taxaDeCompartilhamentos;
    let totalVisualizacoes = visualizacoes;
    let totalCliques = cliques;
    let totalCompartilhamentos = compartilhamentos;

    for (let i = 1; i <= maximoDeCompartilhamentos; i++) {
        visualizacoes = compartilhamentos * totalVisualizacoesPorCompartilhamento;
        cliques = visualizacoes * taxaDeCliques;
        compartilhamentos = cliques * taxaDeCompartilhamentos;

        totalVisualizacoes += visualizacoes;
        totalCliques += cliques;
        totalCompartilhamentos += compartilhamentos;

        if (i == maximoDeCompartilhamentos) {
            const visualizacoesUltimoCompartilhamento =
            compartilhamentos * totalVisualizacoesPorCompartilhamento;
            totalVisualizacoes += visualizacoesUltimoCompartilhamento;
        }
    }

    return { totalVisualizacoes, totalCliques, totalCompartilhamentos };

    }
}

module.exports = CalculadoraAnunciosService;
