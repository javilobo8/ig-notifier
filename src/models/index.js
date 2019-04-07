const mongoose = require('mongoose');
const Promise = require('bluebird');

mongoose.Promise = Promise;

module.exports = {
  Entry: require('./entry'),
};
