const express = require('express');

const notesRouter = require('./notesHtml.js');

const app = express();

app.use('/notes', notesRouter);

module.exports = app;