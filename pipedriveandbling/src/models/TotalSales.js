const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const totalSalesSchema = new Schema({
  total_value: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const TotalSales = mongoose.model('TotalSales', totalSalesSchema);

module.exports = TotalSales;