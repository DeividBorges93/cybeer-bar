const express = require('express');

const app = express();
app.use(express.static('public'));
app.use('/images',express.static(__dirname + '/public/images'));

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
