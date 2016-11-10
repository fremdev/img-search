const request = require('request');

const config = require('../config/config');
const imgurId = process.env.IMGUR_ID || config.imgurId;

const getImages = (search, page = 1) => {
  return new Promise((resolve, reject) => {

    const options = {
      url: `https://api.imgur.com/3/gallery/search/${page}?q=${search}`,
      headers: {Authorization: imgurId},
      json: true
    };

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
        resolve(body);
      }
    };

    request(options, checkData);
  });
};

module.exports = getImages;
