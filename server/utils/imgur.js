const request = require('request');

const config = require('../config/config');

const checkData = (error, response, body) => {
  if(!error && response.statusCode == 200) {
    body = body.data.filter(image => {
      if(!image.is_album) {
        return image;
      }
    }).map(image => {
      return {
        url: image.link,
        snippet: image.title,
        context: `https://imgur.com/${image.id}`
      };
    });
    console.log(body);
  }
};

const getImages = (search, page = 1) => {
  const options = {
    url: `https://api.imgur.com/3/gallery/search/${page}?q=${search}`,
    headers: { Authorization: config.imgurId },
    json: true
  };

  request(options, checkData);
};

getImages('dog', 4);

module.exports = getImages;
