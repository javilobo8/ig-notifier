const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const config = require('../config');

const mongod = new MongoMemoryServer();

module.exports = {
  connect: async () => {
    const connectionString = await mongod.getConnectionString('test');
    await mongoose.connect(connectionString, config.mongo.options);
  },
  disconnect: async () => {
    await mongoose.disconnect();
    await mongod.stop();
  },
};
