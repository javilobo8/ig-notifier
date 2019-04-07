module.exports = {
  port: 8000,

  instantGaming: {
    host: 'https://www.instant-gaming.com',
  },

  mongo: {
    uri: process.env.MONGO_URI,
    options: {
      useNewUrlParser: true,
    },
  },
};
