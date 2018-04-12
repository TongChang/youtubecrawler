'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SearchQueries', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        query: {
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
    }).then(() => {
      return queryInterface.addColumn('ScrapedVideos', 'searchQueriesId', {
        type: Sequelize.INTEGER,
        references: { model: 'SearchQueries', key: 'id' }
      })
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('SearchQueries')
      .then(() => {
        queryInterface.removeColumn('ScrapedVideos', 'searchQueriesId');
      });
  }
};
