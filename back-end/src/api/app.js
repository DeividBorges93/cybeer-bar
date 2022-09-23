require('dotenv/config');
require('express-async-errors');

const express = require('express');
const errorMiddleware = require('../middlewares/error.middleware');

const app = express();
app.use(express.static('public'));
app.use('/images',express.static(__dirname + '/public/images'));

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(errorMiddleware);

module.exports = app;
