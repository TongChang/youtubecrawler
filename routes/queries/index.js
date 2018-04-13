'use strict';

const express = require('express');
const router = express.Router();
const models = require('../../models');
const SearchQueries = models.SearchQueries;
const crawler = require('../../lib/batch/crawler');

router.get('/', (req, res, next) => {
  SearchQueries.findAndCountAll()
    .then( result => {
      res.render('queries/index', {title: 'queries', queries: result.rows, count: result.count});
    });
});

router.get('/add/', (req, res, next) => {
  res.render('queries/add', {title: 'queries/add'});
});

router.post('/add/', (req, res, next) => {
  let query = req.body['query'];
  if (!query) {
    console.log('えらー');
    res.render('queries/add', {title: 'queries/add', error: '入力されとらん'});
    return;
  }
  console.log("そのあと");
  SearchQueries.create({
    query: query
  })
    .then( searchQuery => {
      crawler.run(searchQuery);
      res.redirect('/queries/');
    });
});

module.exports = router;
