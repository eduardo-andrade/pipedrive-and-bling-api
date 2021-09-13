const connectPipedrive = require('../services/connectPipedrive');
const connectBling = require('../services/connectBling');
const createBlingOrder = require('../models/createBlingOrder');
const Sale = require('../repository/salesRepository');

class integrateOrder {
  async startIntegration(req, res) {
    try {
      let returnData = {
        status: null,
        message: null,
        orders: [],
      };

      const Orders = await connectPipedrive();

      for (let order of Orders) {
        let orderXml = await createBlingOrder(order);

        let blingOrder = await connectBling(orderXml);

        let saveOrder;

        if (blingOrder.status === 200) {
          try {
            saveOrder = await Sale.saveSales(order);
            returnData.orders.push(saveOrder);
          } catch (err) { return returnData;}}

        else {
          return res.status(500).send({ error: 'Error happened on create order in Bling'})

        }
      }

      const saveTotalSales = await Sale.saveTotalSales(returnData.orders);

      returnData.message = 'Process Success';
      returnData.status = 200;

      return res.status(200).json(returnData);

    } catch (err) {
      return res.status(500).send({ error: 'An error has occurred in integration'});
    }
  }
}

module.exports = new integrateOrder();