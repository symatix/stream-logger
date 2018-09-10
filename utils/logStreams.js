const authorize = require('../api/authorize');
const writeToSheet = require('../api/writeToSheet');
const asyncGrabData = require('./asyncGrabData');
const formatSongName = require('./formatSongName');

module.exports = function(){
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
      
      // formatSongName is used to correctly display "&" and " ' " characters
      var row = [formatSongName(data)]
      authorize(writeToSheet, row);
    }).catch(err => console.log("Error in promise: ", err));
}

