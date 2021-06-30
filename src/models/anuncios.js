"use strict";
const ValidaDataTerminoService = require('../services/ValidaDataTermino');
const CalculaIntervaloEntreDatasService = require('../services/CalculaIntervaloEntreDatas');
const CalculadoraAnunciosService = require('../services/CalculadoraAnuncios');

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Anuncios extends Model {
    static associate(models) {}
  }

  Anuncios.init(
    {
      nome: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Informe o nome do anúncio",
          },
        },
      },
      cliente: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Informe o nome do cliente",
          },
        },
      },
      dataInicio: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Informe a data de início do anúncio",
          },
        },
      },
      dataTermino: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Informe a data de término do anúncio",
          },
        },
      },
      investimentoDia: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Informe o valor de investimento por dia",
          },
        },
      },
      duracaoAnuncio: DataTypes.INTEGER,
      visualizacoes: DataTypes.INTEGER,
      cliques: DataTypes.INTEGER,
      compartilhamentos: DataTypes.INTEGER,
      investimentoTotal: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Anuncios",
    }
  );

  // HOOKS
  Anuncios.beforeCreate("validaDataTerminoDepoisDaDataInicio", (anuncio) => {
    new ValidaDataTerminoService(anuncio.dataInicio, anuncio.dataTermino).call(); 
  });

  Anuncios.beforeCreate("calculaDuracaoAnuncio", (anuncio) => {  
    anuncio.duracaoAnuncio = new CalculaIntervaloEntreDatasService(anuncio.dataInicio, anuncio.dataTermino).call();
  });

  Anuncios.beforeCreate('calculaTotalInvestimento', (anuncio) => {
    anuncio.investimentoTotal = Number(anuncio.duracaoAnuncio * anuncio.investimentoDia);
  });

  Anuncios.beforeCreate("calculadoraAnuncios", (anuncio) => {
    const { totalVisualizacoes, totalCliques, totalCompartilhamentos } = new CalculadoraAnunciosService(anuncio.investimentoTotal).call();
    anuncio.visualizacoes = Math.round(totalVisualizacoes);
    anuncio.cliques = Math.round(totalCliques);
    anuncio.compartilhamentos = Math.round(totalCompartilhamentos);
  });

  return Anuncios;
};
