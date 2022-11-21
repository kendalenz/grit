
const express = require('express');
const app = express.Router();
const { User } = require('../db');

app.get('/:id', async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.id);
        res.send(user);
    } catch(err) {
        next(err);
    }
  });

  module.exports = app;