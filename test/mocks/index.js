const fs = require('fs');
const path = require('path');

module.exports = {
  games: fs.readFileSync(path.join(__dirname, 'games.html')).toString(),
};
