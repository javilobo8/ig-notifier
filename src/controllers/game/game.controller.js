const Promise = require('bluebird');

class GameController {
  constructor({ services }) {
    this.instantGamingService = services.instantGaming;
  }

  get(req, res) {
    Promise.resolve()
      .then(() => this.instantGamingService.getLatestStockGames())
      .then(res.send.bind(res))
      .catch((error) => {
        console.error(error);
        res.status(500).send();
      });
  }
}

GameController.domain = '/game';
GameController.routes = [
  {
    path: '/',
    method: 'get',
    handler: 'get',
  },
];

module.exports = GameController;
