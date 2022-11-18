const express = require('express');
const app = express.Router();
const { Sport } = require('../db');

app.use(express.json());

app.get('/', async (req, res, next) => {
    try {
        const sports = await Sport.findAll();
        res.send(sports);
    }
    catch(err) {
        next(err);
    }
});

module.exports = app;