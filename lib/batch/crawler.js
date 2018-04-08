'use strict';

const path   = require('path');
const models = require('../../models');
const ScrapedVideos = models.ScrapedVideos;
const youtubeClient = require('../apiClients/youtubeClient.js');

const CONFIG_PATH = path.join(__dirname, '../..//config/config.json');

let config = {};

module.exports.run = async () => {
  try {

    initialize();
    await entryToDBFromYoutubeAPI();
    await completeVideoInformationOneByOne();

  } catch (error) {
    console.error( 'error occured.' );
    console.error( error );
    process.exit(99);
  }

  models.sequelize.close();

  console.log('done');
}

const initialize = () => {
  try {
    config = require(CONFIG_PATH);
    youtubeClient.initialized(config.youtube);
  } catch (error) {
    throw error;
  }
};

const entryToDBFromYoutubeAPI = async () => {
  await ScrapedVideos.createIncompletes(
    await youtubeClient.getVideoIds(config.youtube.q)
  );
}

const completeVideoInformationOneByOne = async () => {
  try {
    let incompleteOne;

    while(incompleteOne = await ScrapedVideos.getIncompleteOne()){
      await ScrapedVideos.updateIncompleteVideoInfoById(
        incompleteOne.id,
        await youtubeClient.getVideoInfoByVideoId(incompleteOne.videoId)
      );
    }

  } catch (error) {
    throw error;
  }
}

module.exports.run();
