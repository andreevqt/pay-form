'use strict';

const Bill = require('./bill.model');

module.exports.create = async (attrs) => {
  return (new Bill(attrs)).save();
};
