// Create the schema of sale to save in a collection of MongoDB

const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const saleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  Oportunity: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});

const Sales = mongoose.model('Sales', saleSchema);

module.exports = Sales;