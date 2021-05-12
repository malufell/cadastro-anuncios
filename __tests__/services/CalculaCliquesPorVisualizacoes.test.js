const { test, expect } = require('@jest/globals');

const CalculaCliquesPorVisualizacoesService = require('../../src/services/CalculaCliquesPorVisualizacoes');

test('ao informar o valor de 100 visualizações retorna 12 cliques', () => {
    expect(new CalculaCliquesPorVisualizacoesService(100).call()).toBe(12)
});