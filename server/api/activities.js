const express = require('express');
const app = express.Router();
const { Activity } = require('../db');

app.use(express.json());

app.get('/', async (req, res, next) => {
    try {
      const activities = await Activity.findAll();
      res.send(activities);
    } catch (err) {
      next(err);
    }
  });

  app.post('/', async (req, res, next) => {
    try {
      res.status(201).send(await Activity.create(req.body));
    } catch (err) {
      next(err);
    }
  });

  module.exports = app;