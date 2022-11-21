const express = require('express');
const app = express.Router();

app.use(express.json());

app.get('/', async (req, res, next) => {
    try {
      res.send(req.body);
    } catch (err) {
      next(err);
    }
  });

  module.exports = app;