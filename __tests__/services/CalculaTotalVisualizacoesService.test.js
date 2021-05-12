const { test, expect } = require('@jest/globals');

const CalculaTotalVisualizacoesService = require('../../src/services/CalculaTotalVisualizacoes');

test('retorna o valor 307.38', () => {
    expect(new CalculaTotalVisualizacoesService().call()).toBe(307.3878323199999)
});