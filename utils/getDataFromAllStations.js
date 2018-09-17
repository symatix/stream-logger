

const request = require('request');

// mongoDB model
const Streams = require('../models/stream');

// helpers
const setRequestUrl = require('./setRequestUrl.js');
const extractStreamData = require('./extractStreamData.js');

module.exports = function(streamDB, array) {
    return new Promise(function (resolve, reject) {
       for (var i = 0; i < streamDB.length; i++) {
          const index = i;
          const { url, station } = streamDB[i];
 
          // async job
          request(setRequestUrl(url), (err, resp, body) => {
             if (err) {
                reject("=> request error in scrubbing data ", err);
             } else {
                array.push(extractStreamData(body, station))
                if (array.length === streamDB.length) {
                     resolve(array);
                }
             }
          })
       }
    })
 }