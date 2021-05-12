const { test, expect } = require('@jest/globals');

const CalculaIntervaloEntreDatasService = require('../../src/services/CalculaIntervaloEntreDatas');

test('ao informar a data de início 10/05/2021 e final 11/05/2021 retorna 2', () => {
    expect(new CalculaIntervaloEntreDatasService('2021/05/10', '2021/05/11').call()).toBe(2)
});