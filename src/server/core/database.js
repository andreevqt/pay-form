'use strict';

const mongoose = require('mongoose');
const config = require('../config');

module.exports = () => mongoose.connect(config.get('db.connectionString'));
