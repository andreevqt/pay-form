'use strict';

const asyncHandler = require('express-async-handler');
const service = require('./bill.service');
const { Http } = require('../../constants');

module.exports.create = asyncHandler(async (req, res) => {
  const bill = await service.create(req.body);
  res.status(Http.OK).json({ success: true, bill });
});
