"use strict";
const ValidaDataTerminoService = require('../services/ValidaDataTermino');
const IntervaloEntreDatasService = require('../services/IntervaloEntreDatas');
const TotalVisualizacoesPorInvestimentoService = require('../services/TotalVisualizacoesPorInvestimento');
const CompartilhamentosPorCliquesService = require('../services/CompartilhamentosPorCliques');
const CliquesPorVisualizacoesService = require('../services/CliquesPorVisualizacoes');

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
    new ValidaDataTerminoService(anuncio.dataInicio, anuncio.dataTermino).validaDataTermino(); 
  });

  Anuncios.beforeCreate("calculaDuracaoAnuncio", (anuncio) => {  
    anuncio.duracaoAnuncio = new IntervaloEntreDatasService(anuncio.dataInicio, anuncio.dataTermino).calculaIntervaloEntreDatas();
  });

  Anuncios.beforeCreate('calculaTotalInvestimento', (anuncio) => {
    anuncio.investimentoTotal = Number(anuncio.duracaoAnuncio * anuncio.investimentoDia);
  });

  Anuncios.beforeCreate("calculaTotalVisualizacoesPorInvestimento", (anuncio) => {
    anuncio.visualizacoes = new TotalVisualizacoesPorInvestimentoService(anuncio.investimentoTotal).calculaTotalVisualizacoesPorInvestimento();
  });

  Anuncios.beforeCreate("calculaQuantidadeCliques", (anuncio) => {
    anuncio.cliques = Math.round(new CliquesPorVisualizacoesService(anuncio.visualizacoes).calculaCliquesPorVisualizacoes());
  });

  Anuncios.beforeCreate("calculaQuantidadeCompartilhamntos", (anuncio) => {
    anuncio.compartilhamentos =  Math.round(new CompartilhamentosPorCliquesService(anuncio.visualizacoes).calculaCompartilhamentosPorCliques());
  });

  return Anuncios;
};
