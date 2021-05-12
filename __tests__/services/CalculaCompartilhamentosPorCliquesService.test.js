const { test, expect } = require('@jest/globals');

const CalculaCompartilhamentosPorCliquesService = require('../../src/services/CalculaCompartilhamentosPorCliques');

test('ao informar 100 visualizações retorna 1.79 compartilhamentos', () => {
    expect(new CalculaCompartilhamentosPorCliquesService(100).call()).toBe(1.7999999999999998)
});