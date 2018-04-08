var express = require('express');
var router = express.Router();
var models = require('../models');
var ScrapedVideos = models.ScrapedVideos;

/* GET home page. */
router.get('/', function(req, res, next) {
  let offset = 0;
  let numOfDisplay = 50;
  let numOfPage = req.params['num_of_page'];

  if (numOfPage) {
    offset = numOfDisplay * ( numOfPage - 1 )
  }
  let limit = offset + numOfDisplay;

  models.ScrapedVideos.findAndCountAll({
    offset: offset,
    limit:  limit
  }).then( result => {
    res.render('index', { title: 'list', videos: result.rows, count: result.count });
  } );

});

module.exports = router;
