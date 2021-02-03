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
  listIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'list'
    }]
});

module.exports = mongoose.model('board', BoardSchema);