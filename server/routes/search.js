const express = require('express');
const searchApi = express.Router();

const getImages = require('../utils/imgur');
const History = require('../models/history');

searchApi.get('/search/:query', (req, res) => {
  getImages(req.params.query, req.query.offset).then((data) => {
    new History({term: req.params.query}).save();
    res.json(data);
  });
});

searchApi.get('/latest', (req, res) => {
  History
    .find()
    .select({_id: 0, term: 1, when: 1 })
    .sort({when: -1})
    .limit(10)
    .then((data) => {
      res.json(data);
    });
});

module.exports = searchApi;
