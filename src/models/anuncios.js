"use strict";
const ValidaDataTerminoService = require('../services/ValidaDataTermino');
const CalculaIntervaloEntreDatasService = require('../services/CalculaIntervaloEntreDatas');
const CalculaTotalVisualizacoesPorInvestimentoService = require('../services/CalculaTotalVisualizacoesPorInvestimento');
const CalculaCliquesPorVisualizacoesService = require('../services/CalculaCliquesPorVisualizacoes');
const CalculaCompartilhamentosPorCliquesService = require('../services/CalculaCompartilhamentosPorCliques');

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
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Informe a data de início do anúncio",
          },
        },
      },
      dataTermino: {
        type: DataTypes.DATEONLY,
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

  Anuncios.beforeCreate("calculaTotalVisualizacoesPorInvestimento", (anuncio) => {
    anuncio.visualizacoes = new CalculaTotalVisualizacoesPorInvestimentoService(anuncio.investimentoTotal).call();
  });

  Anuncios.beforeCreate("calculaQuantidadeCliques", (anuncio) => {
    anuncio.cliques = Math.round(new CalculaCliquesPorVisualizacoesService(anuncio.visualizacoes).call());
  });

  Anuncios.beforeCreate("calculaQuantidadeCompartilhamntos", (anuncio) => {
    anuncio.compartilhamentos =  Math.round(new CalculaCompartilhamentosPorCliquesService(anuncio.visualizacoes).call());
  });

  return Anuncios;
};
