require('dotenv/config');
require('express-async-errors');
const express = require('express');
const LoginRoutes = require('../routers/login.route');

const errorMiddleware = require('../middlewares/error.middleware');

const app = express();

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', LoginRoutes);
app.use(errorMiddleware);

module.exports = app;
