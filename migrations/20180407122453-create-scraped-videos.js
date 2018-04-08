'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ScrapedVideos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eTag: {
        type: Sequelize.STRING
      },
      videoId: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      viewCount: {
        type: Sequelize.BIGINT
      },
      likeCount: {
        type: Sequelize.BIGINT
      },
      dislikeCount: {
        type: Sequelize.BIGINT
      },
      publishedAt: {
        type: Sequelize.BIGINT
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ScrapedVideos');
  }
};
