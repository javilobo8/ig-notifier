let config = require('./config');

switch (process.env.NODE_ENV) {
  case 'test':
    config = Object.assign({}, config, require('./config-test'));
    break;
  default:
}

module.exports = config;
