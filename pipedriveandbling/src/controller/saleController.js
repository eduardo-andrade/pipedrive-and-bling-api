const connectPipedrive = require('../services/connectPipedrive');
const TotalSales = require('../models/TotalSales');
const Sales = require('../models/Sales');

module.exports = {
  async getSalesFromPipedrive(req, res) {
    try {
      const Orders = await connectPipedrive();

      return res.status(200).json(Orders);
    } catch (err) { return res.status(500).json('Error to getting sales from Pipedrive', err);
    }
  },
  async getSales(req, res) {
    try {
      const getsales = await Sales.find();

      return res.status(200).json(getsales);
    } catch (err) { return res.status(500).json('Error to getting sales', err);
    }
  },
  async getSalesTotal(req, res) {
    try {
      const totalOrders = await TotalSales.find();

      return res.status(200).json(totalOrders);
    } catch (err) { return res.status(500).json('Error to getting sales', err);
    }
  },
};