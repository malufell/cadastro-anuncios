module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('Anuncios', 'dataInicio', {
                type: Sequelize.DATEONLY,
            }),
            queryInterface.changeColumn('Anuncios', 'dataTermino', {
                type: Sequelize.DATEONLY,
            }),
        ])
    },
    down: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('Anuncios', 'dataInicio', {
                type: Sequelize.DATE,
            }),
            queryInterface.changeColumn('Anuncios', 'dataTermino', {
                type: Sequelize.DATE,
            }),
        ])
    }
};