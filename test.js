const schedule = require('node-schedule');
// helper functions
const logStreams = require('./utils/logStreams.js');



var halfHourLog = schedule.scheduleJob('34 */1 * * *', function(){ 
    logStreams();
});

var fullHourLog = schedule.scheduleJob('35 */1 * * *', function(){ 
    logStreams();
});


