const express = require('express');

const app = express();

require('./connect-mongo');
require('./controllers')(app);

module.exports = app;
