const express = require('express');
const app = express();
const compression = require('compression')
const cors = require('cors')

//rutas
const productsRouter = require('./routes/products');

//coneccion a mongo
require('./database/connection');

//dependencias
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression())
app.use(cors())

app.use('/api', productsRouter);

module.exports = app;

