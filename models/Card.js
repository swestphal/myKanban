const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  _list: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'list'
  },
  card_title: {
    type: String,
    required: true,
  },
  card_text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },

});

module.exports = mongoose.model('card', CardSchema);