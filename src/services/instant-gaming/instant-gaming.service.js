const axios = require('axios').default;
const cheerio = require('cheerio');

const { parseNumber, parseGameId } = require('../../utils');

const URL_SEARCH = '/es/busquedas/';

function parseLatestStockGames(html) {
  const $ = cheerio.load(html);
  const items = $('div.search-wrapper > div.search').children();

  const games = [];

  items.each((index, element) => {
    const game = {
      name: undefined,
      URL: undefined,
      price: undefined,
      coverURL: undefined,
    };
    const item = $(element);

    game.name = item.find('img.picture').attr('title');
    game.URL = item.find('a.cover').attr('href');
    game.price = parseNumber(item.attr('data-price'));
    game.coverURL = item.find('img.picture').attr('src');
    game.id = parseGameId(game.URL);

    games.push(game);
  });

  return games;
}

class InstantGamingService {
  constructor({ config }) {
    this.config = config;

    this.request = axios.create({
      baseURL: config.instantGaming.host,
    });

    console.log(`Initialized instance of ${this.constructor.name}`);
  }

  async getLatestStockGames() {
    const response = await this.request({
      url: URL_SEARCH,
      params: {
        all_types: 1,
        all_cats: 1,
        min_price: 0,
        max_price: 100,
        noprice: 1,
        min_discount: 0,
        max_discount: 100,
        min_reviewsavg: 10,
        max_reviewsavg: 100,
        noreviews: 1,
        available_in: 'ES',
        instock: 1,
        gametype: 'games',
        sort_by: 'avail_date_desc',
      },
    });

    return parseLatestStockGames(response.data);
  }
}

module.exports = InstantGamingService;
