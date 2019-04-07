(async () => {
  if (process.env.NODE_ENV === 'test') {
    return;
  }

  const mongoose = require('mongoose');
  const config = require('../config');

  mongoose.connect(config.mongo.uri, config.mongo.options);

  mongoose.connection.once('connected', () => {
    console.log('Mongoose connected');
  });

  mongoose.connection.once('disconnected', () => {
    console.log('Mongoose disconnected');
  });

  mongoose.connection.once('error', (error) => {
    console.error('Mongoose Error!');
    console.error(error);
    process.exit(1);
  });
})();
