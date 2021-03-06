require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');
require('./db/connectMongo');

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(routes);

module.exports = app;