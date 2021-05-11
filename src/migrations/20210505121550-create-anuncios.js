'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Anuncios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      cliente: {
        type: Sequelize.STRING
      },
      dataInicio: {
        type: Sequelize.DATE
      },
      dataTermino: {
        type: Sequelize.DATE
      },
      investimentoDia: {
        type: Sequelize.FLOAT
      },
      duracaoAnuncio: {
        type: Sequelize.INTEGER
      },
      visualizacoes: {
        type: Sequelize.INTEGER
      },
      cliques: {
        type: Sequelize.INTEGER
      },
      compartilhamentos: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Anuncios');
  }
};