const { expect } = require('chai');

const utils = require('./index');

describe('utils', () => {
  describe('parseNumber', () => {
    it('should parse a number from string', () => {
      expect(utils.parseNumber('1234.21')).equal(1234.21);
    });
    it('should return null if NaN', () => {
      expect(utils.parseNumber('123s.21')).equal(null);
    });
  });

  describe('parseGameId', () => {
    it('should parse a number from string', () => {
      expect(utils.parseGameId('aslkdjhasd/1234-')).equal(1234);
    });
  });
});
