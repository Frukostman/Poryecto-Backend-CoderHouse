const express = require('express');
const app = express();
const compression = require('compression')
const cors = require('cors')

//rutas
const productsRouter = require('./routes/products');
const cartRouter = require('./routes/cart');

//coneccion a mongo
require('./database/connection');

//dependencias
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression())
app.use(cors())

app.use('/api', productsRouter);
app.use('/api', cartRouter);

module.exports = app;

