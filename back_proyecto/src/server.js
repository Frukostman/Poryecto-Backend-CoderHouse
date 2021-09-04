const express = require('express');
const app = express();
const compression = require('compression')

//rutas
const usersRouter = require('./routes/users');
const messagesRouter = require('./routes/messages');

//coneccion a mongo
require('./database/connection');

//dependencias
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression())

app.use('/api', usersRouter);
app.use('/api', messagesRouter);

module.exports = app;

