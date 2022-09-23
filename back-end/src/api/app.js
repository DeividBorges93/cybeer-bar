require('dotenv/config');
require('express-async-errors');
const express = require('express');
const cors = require('cors');
const LoginRoutes = require('../routers/login.route');

const errorMiddleware = require('../middlewares/error.middleware');

const app = express();
app.use(express.static('public'));
app.use('/images',express.static(__dirname + '/public/images'));

app.use(express.json());
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', LoginRoutes);
app.use(errorMiddleware);

module.exports = app;
