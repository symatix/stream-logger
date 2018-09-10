const schedule = require('node-schedule');
// helper functions
const logStreams = require('./utils/logStreams.js');

var halfHourLog = schedule.scheduleJob('26 */1 * * *', function(){ 
    logStreams();
});
var fullHourLog = schedule.scheduleJob('56 */1 * * *', function(){ 
    logStreams();
});