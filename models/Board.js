const mongoose = require('mongoose');

const BoardSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
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

module.exports = mongoose.model('board', BoardSchema);