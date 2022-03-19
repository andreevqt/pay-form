'use strict';

const { Schema, model } = require('mongoose');

const Bill = new Schema({
  cardNumber: String,
  expDate: String,
  cvv: String,
  amount: Number
});

Bill.methods.toJSON = function() {
  return {
    id: this._id,
    amount: this.amount
  };
};

module.exports = model('Bill', Bill);
