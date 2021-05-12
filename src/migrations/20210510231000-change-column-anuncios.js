module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('Anuncios', 'investimentoDia', {
                type: Sequelize.FLOAT,
            }),
        ])
    },
    down: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('Anuncios', 'investimentoDia', {
                type: Sequelize.INTEGER,
            }),
        ])
    }
};