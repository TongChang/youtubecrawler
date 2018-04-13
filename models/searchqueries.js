'use strict';

module.exports = (sequelize, DataTypes) => {
  var SearchQueries = sequelize.define('SearchQueries', {
    query: DataTypes.STRING
  }, {});
  SearchQueries.associate = function(models) {
    SearchQueries.hasMany(models.ScrapedVideos, { foreignKey: 'SearchQueryId', targetKey: 'id'});
  };

  return SearchQueries;
};
