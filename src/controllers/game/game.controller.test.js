const { expect } = require('chai');
const supertest = require('supertest');
const nock = require('nock');

const app = require('../../app');
const config = require('../../../config');
const mocks = require('../../../test/mocks');

describe('GameController', () => {
  before(() => {});
  after(() => {});

  describe('GET /game', () => {
    let response;

    before(async () => {
      nock(config.instantGaming.host)
        .get(/\/es\/busquedas\//)
        .reply(200, mocks.games);

      response = await supertest(app)
        .get('/game');
    });

    after(() => {
      nock.cleanAll();
    });

    it('should return 200', () => {
      expect(response.statusCode).equal(200);
    });

    it('should return an array of objects', () => {
      expect(response.body).be.an('array');
      expect(response.body[0]).to.haveOwnProperty('name');
      expect(response.body[0]).to.haveOwnProperty('URL');
      expect(response.body[0]).to.haveOwnProperty('price');
      expect(response.body[0]).to.haveOwnProperty('coverURL');
      expect(response.body[0]).to.haveOwnProperty('id');
    });
  });
});
