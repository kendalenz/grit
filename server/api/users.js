const express = require('express');
const app = express.Router();
const { User } = require('../db');

app.use(express.json());

app.get('/', async (req, res, next) => {
    try {
      const users = await User.findAll();
      res.send(users);
    } catch (err) {
      next(err);
    }
  });

  module.exports = app;