const express = require('express');
const searchApi = express.Router();

const getImages = require('../utils/imgur');

searchApi.get('/search/:query', (req, res) => {
  getImages(req.params.query, req.query.offset).then((data) => {
    res.send(data)
  });
});

searchApi.get('/latest', (req, res) => {
  console.log('latest');
});

module.exports = searchApi;
