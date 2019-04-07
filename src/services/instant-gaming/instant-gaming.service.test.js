const { expect } = require('chai');
const nock = require('nock');

const config = require('../../../config');
const mocks = require('../../../test/mocks');

const InstantGamingService = require('./instant-gaming.service');

describe('InstantGamingService', () => {
  const instantGamingService = new InstantGamingService({ config });

  before(() => {});
  after(() => {});

  describe('getLatestStockGames', () => {
    before(() => {
      nock(config.instantGaming.host)
        .get(/\/es\/busquedas\//)
        .reply(200, mocks.games);
    });

    after(() => {
      nock.cleanAll();
    });

    it('should return an array of objects', async () => {
      const result = await instantGamingService.getLatestStockGames();

      expect(result).be.an('array');
      expect(result[0]).to.haveOwnProperty('name');
      expect(result[0]).to.haveOwnProperty('URL');
      expect(result[0]).to.haveOwnProperty('price');
      expect(result[0]).to.haveOwnProperty('coverURL');
      expect(result[0]).to.haveOwnProperty('id');
    });
  });
});
