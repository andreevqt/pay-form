'use strict';

const { Router } = require('express');
const bills = require('./bill/bill.route');

const router = new Router();

bills(router);

module.exports = router;
