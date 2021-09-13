const Sales = require('../models/Sales');
const TotalSales = require('../models/TotalSales');
var mongoose = require('mongoose');

//archive with functions for save oportunities in a database MongoDB

module.exports = {
  async saveSales(order) {
    try {
      const Sale = await Sales.create({
        id: mongoose.Types.ObjectId(),
        title: order.title,
        value: order.value,
      });

      return Sale;
    } catch (err) { return ('Error to save sale', err);
    }
  },

  // function to calculate the total of value from orders
  async saveTotalSales(orders) {
    try {
      let total_value = 0;

      for (let order of orders) {
        total_value += order.value;
      }

      const TotalSales = await TotalSales.create({
        id: mongoose.Types.ObjectId(),
        total_value: total_value,
        date: new Date(),
      });

      return TotalSales;
    } catch (err) { return ('Error to get total sales', err);
    }
  },
};