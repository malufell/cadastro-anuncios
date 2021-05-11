class CalculaIntervaloEntreDatasService {
  constructor(dataInicio, dataTermino) {
    this.dataInicio = dataInicio;
    this.dataTermino = dataTermino;
  }

  call() {
    const dataInicio = new Date(this.dataInicio).getTime();
    const dataFim = new Date(this.dataTermino).getTime();

    return (dataFim - dataInicio) / 1000 / 60 / 60 / 24 + 1;
  };
};

module.exports = CalculaIntervaloEntreDatasService;