const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  action: String,
  employeeId: mongoose.Schema.Types.ObjectId,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Log', logSchema);
