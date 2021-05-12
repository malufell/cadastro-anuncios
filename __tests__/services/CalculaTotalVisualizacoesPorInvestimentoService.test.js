const { test, expect } = require('@jest/globals');

const CalculaTotalVisualizacoesPorInvestimentoService = require('../../src/services/CalculaTotalVisualizacoesPorInvestimento');

test('ao informar o valor 1 de investimento retorna 92 visualizações', () => {
    expect(new CalculaTotalVisualizacoesPorInvestimentoService(1).call()).toBe(92.21634969599997)
});