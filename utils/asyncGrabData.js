
const request = require('request');
// stream database
const streamDB = require('../db/streamDB.js');
// helpers
const configureReqOptions = require('./configureReqOptions.js');
const formatStreamData = require('./formatStreamData.js');

module.exports = function(array) {
   return new Promise(function (resolve, reject) {
      for (var i = 0; i < streamDB.length; i++) {
         const index = i;
         const { url, station } = streamDB[i];

         // async job
         request(configureReqOptions(url), (err, resp, body) => {
            if (err) {
               reject("Request error: ", err);
            } else {
               array.push(formatStreamData(body, station))
               if (array.length === streamDB.length) {
                  resolve(array);
               }
            }
         })
      }
   })
}



