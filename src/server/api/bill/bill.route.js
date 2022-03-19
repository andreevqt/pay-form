'use strict';

const { Router } = require('express');

const router = new Router();
const controller = require('./bill.controller');
const { validate } = require('../../core/middleware')
const validator = require('./bill.validator');

module.exports = (app) => {
  app.use('/bills', router);

  router
    .route('/')
    // create an article
    .post(validate(validator.create), controller.create);
};
