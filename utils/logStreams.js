const authorize = require('../api/authorize');
const writeToSheet = require('../api/writeToSheet');
const asyncGrabData = require('./asyncGrabData');

module.exports = function(){
   asyncGrabData([]).then(res => {
      const rawData = res
         .sort((a, b) => {
            if(a.station < b.station) return -1;
            if(a.station > b.station) return 1;
            return 0;
         })
         .map(d => {
            delete d.station;
            return Object.values(d)
         })
      var data = [].concat.apply([], rawData);
      const time = new Date().toLocaleString();
      data.unshift(time);
      
      var row = [data];
      authorize(writeToSheet, row);
    }).catch(err => console.log("Error in promise: ", err));
}

