module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('Anuncios', 'dataInicio', {
                type: Sequelize.STRING,
            }),
            queryInterface.changeColumn('Anuncios', 'dataTermino', {
                type: Sequelize.STRING,
            }),
        ])
    },
    down: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('Anuncios', 'dataInicio', {
                type: Sequelize.DATEONLY,
            }),
            queryInterface.changeColumn('Anuncios', 'dataTermino', {
                type: Sequelize.DATEONLY,
            }),
        ])
    }
};