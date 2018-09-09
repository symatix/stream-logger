const authorize = require('./api/authorize');
const listSheet = require('./api/listSheet');
const writeToSheet = require('./api/writeToSheet');

authorize(writeToSheet);