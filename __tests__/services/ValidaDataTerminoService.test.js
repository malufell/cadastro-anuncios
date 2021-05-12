const { test, expect } = require('@jest/globals');
const { ValidationError } = require('sequelize');

const ValidaDataTerminoService = require('../../src/services/ValidaDataTermino');

test('ao informar a data de término inferior a data de início retorna uma exceção', () => {
    expect(() => { new ValidaDataTerminoService('10/05/2021', '09/05/2021').call(); }).toThrow(ValidationError);
});

test('ao informar a data de término igual a data de início não retorna exceção', () => {
    expect(new ValidaDataTerminoService('10/05/2021', '10/05/2021').call()).toBeUndefined();
});

test('ao informar a data de término superior a data de início não retorna exceção', () => {
    expect(new ValidaDataTerminoService('10/05/2021', '11/05/2021').call()).toBeUndefined();
});