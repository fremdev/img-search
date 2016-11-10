const express = require('express');

const searchApi = express.Router();

searchApi.get('/search/:query', (req, res) => {

});

searchApi.get('/latest', (req, res) => {
  console.log('latest');
});

module.exports = searchApi;
