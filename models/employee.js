const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  title: String,
  department: {
    type: String,
    enum: ['HR', 'Tech', 'Product', 'Leadership'],
  },
  annualSalary: Number,
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Employee', employeeSchema);
