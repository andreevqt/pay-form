'use strict';

const repository = require('./bill.repository');

module.exports.create = (attrs) => {
  return repository.create(attrs);
};
