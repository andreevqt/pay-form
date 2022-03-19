'use strict';

const Bill = require('./bill.model');

module.exports.create = (attrs) => {
  return new Bill(attrs);
};
