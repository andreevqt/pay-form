'use strict';

const express = require('express');
const _ = require('lodash');
const { Http } = require('../constants');
const { logRequests, errorHandler } = require('../core/middleware');
const config = require('../config');
const connectToDb = require('./database');
const api = require('../api');
const cors = require('cors');

module.exports = async (app) => {
  // init db
  await connectToDb();
  // express
  app.use(express.json());
  app.use(express.urlencoded({
    extended: false
  }));
  app.use(cors());
  // serve static file
  app.use(express.static(`${process.cwd()}/dist`));
  // log requests
  app.use(logRequests);
  app.route('/', (req, res) => res.sendFile(`${process.cwd()}/dist/index.html`));
  // api routes
  app.use(config.get('app.prefix'), api);
  // fallback to spa app
  app.use((req, res, next) => res.status(Http.NOT_FOUND).send('Not found'));
  app.use(errorHandler);
};
