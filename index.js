
const request = require('request');
const fs = require('fs');
// const schedule = require('node-schedule');

// stream object with list of sterams and respective urls
const streams = require('./streams.js');

// helper functions
const writeData = require('./writeData.js');
const writeTime = require('./writeTime.js');
const configureReqOptions = require('./configureReqOptions.js');
const generateLogName = require('./generateLogName.js');


// this is where the magic happends every hour on 26th minute
// var j = schedule.scheduleJob('26 */1 * * *', function(){ 

// INSERT CODE BELOW HERE TO MAKE IT A CRON JOB

// });


const file = generateLogName();
const time = new Date().toLocaleString();
const regex = /<body>(.*?)<\/body>/i;


// first write the time of execution to top of file
fs.appendFileSync(file, writeTime(time), function(err) {
    if(err) { return console.log(err); }
    console.log("The file was saved!");
})


// iterate over streams and write the data to same file
for (var i = 0; i < streams.length; i++){
    const url = streams[i].url;
    const station = streams[i].station;

    request(configureReqOptions(url), function (error, response, body) {
        const match = regex.exec(body);  
        const data = match[1].split(',');

        fs.appendFileSync(file, writeData(data, station), function(err) {
            if(err) { return console.log(err); }
            console.log(`${file} saved!`);
        }); 
    });
}






