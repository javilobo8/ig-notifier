const mongoose = require('mongoose');

const Entry = mongoose.Schema({
  entryId: String,
  title: String,
  description: String,
  date: Date,
  URL: String,
  imageURL: String,
  price: Number,
}, { versionKey: false, timestamps: true, collectionName: 'entries' });

module.exports = mongoose.model('entries', Entry);
