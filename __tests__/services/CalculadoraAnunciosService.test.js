const { test, expect } = require("@jest/globals");

const CalculadoraAnunciosService = require("../../src/services/CalculadoraAnuncios");

test("ao informar o valor 1 de investimento deve retornar 92 visualizacoes, 10 cliques, 2 compartilhamentos", () => {
  expect(new CalculadoraAnunciosService(1).call()).toStrictEqual({
    totalCliques: 10.369391615999996,
    totalCompartilhamentos: 1.5554087423999996,
    totalVisualizacoes: 92.21634969599998,
  });
});
