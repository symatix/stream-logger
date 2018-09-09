const schedule = require('node-schedule');
// api functions
const authorize = require('./api/authorize');
const writeToSheet = require('./api/writeToSheet');
// helper functions
const asyncGrabData = require('./utils/asyncGrabData.js');




// var j = schedule.scheduleJob('26 */1 * * *', function(){ 
    
//     asyncGrabData([]).then(res => {
//         const rawData = res
//             .sort((a, b) => a.station > b.station)
//             .map(d => {
//                 delete d.station; 
//                 return Object.values(d)
//             })

//         var data = [].concat.apply([], rawData);
//         const time = new Date().toLocaleString();
//         data.unshift(time);

//         var row = [data]
//         authorize(writeToSheet, row);
//     }).catch(err => console.log("Error in promise: ", err));
// });

asyncGrabData([]).then(res => {
    const rawData = res
        .sort((a, b) => a.station > b.station)
        .map(d => {
            delete d.station; 
            return Object.values(d)
        })

    var data = [].concat.apply([], rawData);
    const time = new Date().toLocaleString();
    data.unshift(time);

    var row = [data]
    authorize(writeToSheet, row);
}).catch(err => console.log("Error in promise: ", err));



