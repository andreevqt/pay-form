'use strict';

require('dotenv').config();

const _ = require('lodash');

const getBool = (envVar, defaultValue) => {
  if (_.isBoolean(envVar)) {
    return envVar;
  }

  if (_.isString(envVar)) {
    if (envVar === 'true') return true;
    if (envVar === 'false') return false;
  }

  return defaultValue;
};

const getString = (envVar, defaultValue) => {
  return envVar || defaultValue;
};

const getInteger = (envVar, defaultValue) => {
  if (_.isInteger(envVar)) {
    return envVar;
  }

  if (_.isString(envVar)) {
    return _.toInteger(envVar);
  }

  return defaultValue;
};

const config = {
  debug: getBool(process.env.DEBUG, false),
  app: {
    port: getInteger(process.env.APP_PORT, 3000),
    secret: getString(process.env.APP_SECRET),
    prefix: getString(process.env.API_PREFIX, '/'),
    url: getString(process.env.APP_URL, 'http://localhost'),
  },
  db: {
    connectionString: getString(process.env.DB_CONNECTION_STRING, 'mongodb://localhost:27017/test')
  },
  jwt: {
    expiresIn: getString(process.env.JWT_EXPIRES_IN, '15m')
  }
};

const get = (key) => {
  return _.get(config, key);
};

const set = (key, value) => {
  _.set(config, key, value);
};

module.exports = {
  get,
  set
};
