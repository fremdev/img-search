const mongoose = require('mongoose');

const mongodb = process.env.MONGODB_URI || 'mongodb://localhost:27017';
mongoose.Promise = global.Promise;
mongoose.connect(mongodb);

module.exports = mongoose;
