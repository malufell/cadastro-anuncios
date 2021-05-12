const { test, expect } = require('@jest/globals');

const CalculaConversaoVisualizacoesPorInvestimentoService = require('../../src/services/CalculaConversaoVisualizacoesPorInvestimento');

test('ao informar 100 visualizações retorna 92.2', () => {
    expect(new CalculaConversaoVisualizacoesPorInvestimentoService(100).call()).toBe(92.21634969599997)
});

