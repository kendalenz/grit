const express = require('express');
const app = express.Router();
const { Distance } = require('../db');

app.get('/', async (req, res, next) => {
    try {
        const distance = await Distance.findAll();
        res.send(distance);
    }
    catch(err) {
        next(err);
    }
});

module.exports = app;