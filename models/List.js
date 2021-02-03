const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
  _board: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'board'
  },
  list_title: {
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
  order: {
    type: Number,
    default: 0,
  }
});

module.exports = mongoose.model('list', ListSchema);