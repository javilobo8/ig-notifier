/* eslint-disable no-unused-expressions */
const mongoose = require('mongoose');
const { expect } = require('chai');

const testDB = require('../../test/test-db');
const { Entry: EntryModel } = require('./');

describe('EntryModel', () => {
  before(() => testDB.connect());
  after(() => testDB.disconnect());

  describe('when creating a model', () => {
    const entryObjectId = new mongoose.Types.ObjectId();

    const baseEntry = {
      _id: entryObjectId,
      entryId: 'entryId',
      title: 'title',
      description: 'description',
      date: new Date(),
      URL: 'URL',
      imageURL: 'imageURL',
      price: 12345,
    };

    before(() => new EntryModel(baseEntry).save());
    after(() => EntryModel.deleteMany());

    it('should return all the properties', async () => {
      const result = await EntryModel.findById(entryObjectId);
      expect(result._id).eql(entryObjectId);
      expect(result.entryId).equal(baseEntry.entryId);
      expect(result.title).equal(baseEntry.title);
      expect(result.description).equal(baseEntry.description);
      expect(result.date).eql(baseEntry.date);
      expect(result.URL).equal(baseEntry.URL);
      expect(result.imageURL).equal(baseEntry.imageURL);
      expect(result.price).equal(baseEntry.price);
      expect(result.createdAt).to.exist;
      expect(result.updatedAt).to.exist;
    });
  });
});
