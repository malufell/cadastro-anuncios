const { test, expect } = require('@jest/globals');

const CalculaVisualizacoesPorCompartilhamentoService = require('../../src/services/CalculaVisualizacoesPorCompartilhamento');

test('ao informar 100 visualizações retorna o valor de 72 visualizações', () => {
    expect(new CalculaVisualizacoesPorCompartilhamentoService(100).call()).toBe(72)
});