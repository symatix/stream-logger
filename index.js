
const request = require('request');
const fs = require('fs');
// const schedule = require('node-schedule');

// stream database
const streamDB = require('./db/streamDB.js');

// helper functions
const writeData = require('./utils/writeData.js');
const writeTime = require('./utils/writeTime.js');
const configureReqOptions = require('./utils/configureReqOptions.js');
const generateLogName = require('./utils/generateLogName.js');
const formatStreamData = require('./utils/formatStreamData.js');


// this is where the magic happends every hour on 26th minute
// var j = schedule.scheduleJob('26 */1 * * *', function(){ 

// });

const file = generateLogName();
const time = new Date().toLocaleString();

// first write the time of execution to top of file
fs.appendFileSync(file, writeTime(time), function(err) {
    if(err) { return console.log(err); }
    console.log("The file was saved!");
})

// iterate over streams and write the data to file
streamDB.map(({url, station}) => {
    request(configureReqOptions(url), function (error, response, body) {
        const streamData = formatStreamData(body, station)

        fs.appendFileSync(file, writeData(streamData), function(err) {
            if(err) { return console.log(err); }
            console.log(`=> ${file} saved`);
        }); 
    });
})
