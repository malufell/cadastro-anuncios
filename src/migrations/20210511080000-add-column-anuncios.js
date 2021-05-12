module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.addColumn('Anuncios', 'investimentoTotal', {
                type: Sequelize.FLOAT,
            }),
        ])
    },
    down: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.removeColumn('Anuncios', 'investimentoTotal', {
                type: Sequelize.FLOAT,
            }),
        ])
    }
};