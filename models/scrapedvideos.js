'use strict';
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = (sequelize, DataTypes) => {
  var ScrapedVideos = sequelize.define('ScrapedVideos', {
    eTag: DataTypes.STRING,
    videoId: DataTypes.STRING,
    title: DataTypes.STRING,
    viewCount: DataTypes.BIGINT,
    likeCount: DataTypes.BIGINT,
    dislikeCount: DataTypes.BIGINT,
    publishedAt: DataTypes.BIGINT
  }, {});
  ScrapedVideos.associate = function(models) {
    // associations can be defined here
  };

  ScrapedVideos.createIncompletes = async videoIds => {
    try {
      await Promise.all(videoIds.map(videoId => {
          return ScrapedVideos.findOrCreate({
            where: {
              videoId: videoId
            }
          });
      }));
    } catch (error) {
      throw error;
    }
  };

  ScrapedVideos.updateIncompleteVideoInfoById = async (id, youtubeVideoInfo) => {
    try {
      return await ScrapedVideos.update(
        {
          title: youtubeVideoInfo.snippet.title,
          publishedAt: youtubeVideoInfo.snippet.publishedAt,
          viewCount: youtubeVideoInfo.statistics.viewCount,
          likeCount: youtubeVideoInfo.statistics.likeCount,
          dislikeCount: youtubeVideoInfo.statistics.dislikeCount
        },
        {
          where: {
            id: {
              [Op.eq]: id
            }
          }
        }
      );
    } catch (error) {
      throw error;
    }
  };

  ScrapedVideos.getIncompleteOne = async () => {
    try {
      return (await ScrapedVideos.findOne({
        where: {
          title: {
            [Op.eq]: null
          }
        }
      }));
    } catch (error) {
      throw error;
    }
  }

  return ScrapedVideos;
};

