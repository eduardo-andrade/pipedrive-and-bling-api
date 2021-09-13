//Archive who define the routes of API

const APIsController = require('./controller/APIsController');
const saleController = require('./controller/saleController');
const routes = require('express').Router();

routes.get('/start', APIsController.startIntegration); //endpoint who get and send the orders to integrations
routes.get('/pipedrive-sales', saleController.getSalesFromPipedrive); //endpoint point to consult the won oportunities in PipeDrive
routes.get('/sales', saleController.getSales); //endpoint to get/show the sales of the day
routes.get('/total-sales', saleController.getSalesTotal); // endpoint to get/show the value total of sales of the day

module.exports = routes;