'use strict';

const Bill = require('./bill.model');

module.exports.create = async (attrs) => {
  const doc = new Bill(attrs);
  await doc.save();
  return doc;
};
