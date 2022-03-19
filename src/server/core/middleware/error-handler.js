'use strict';

const { Http } = require('../../constants');

module.exports = (err, req, res, next) => {
  res.status(Http.INTERNAL_SERVER_ERROR).send({
    success: false,
    message: err.message,
  });
};
