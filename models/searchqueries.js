'use strict';
module.exports = (sequelize, DataTypes) => {
  var SearchQueries = sequelize.define('SearchQueries', {
    query: DataTypes.STRING
  }, {});
  SearchQueries.associate = function(models) {
    // associations can be defined here
  };
  return SearchQueries;
};