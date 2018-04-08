'use strict';

const {google} = require('googleapis');
const youtube = google.youtube({
  version: 'v3'
});

let apikey;

module.exports.initialized = config => {
  apikey = config.apikey;
}

module.exports.getVideoIds = async q => {
  try {
    checkInitialized();
    console.log('query is [ ' + q + ' ] ');
    return (await youtube.search.list({
      key: apikey,
      part: 'id',
      q: q,
      type: 'video',
      order: 'viewCount',
      maxResults: 50
    }))
    .data.items.map(videoInfo => videoInfo.id.videoId);
  } catch (error) {
    throw error;
  }
}

module.exports.getVideoInfoByVideoId = async videoId => {
  try {
    checkInitialized();
    return (await youtube.videos.list({
      key: apikey,
      part: 'statistics, snippet',
      id: videoId
    }))
      .data.items[0];
  } catch (error) {
    throw error;
  }
}

const checkInitialized = () => {
  if(!apikey) {
    throw new Error('Initializedが呼ばれてません。');
  }
};

