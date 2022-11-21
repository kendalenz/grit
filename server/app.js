const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());
app.engine('html', require('ejs').renderFile);

app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/static', express.static(path.join(__dirname, '../static')));

app.get('/', (req, res)=> res.render(path.join(__dirname, '../static/index.html'), { API_KEY: process.env.API_KEY }));

app.use('/api/auth', require('./api/auth'));
app.use('/api/activities', require('./api/activities'));
app.use('/api/createroute', require('./api/createroute'));
app.use('/api/users', require('./api/users'));

module.exports = app;
