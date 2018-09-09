const {google} = require('googleapis');
const token = require('../config/token');
const credentials = require('../config/credentials');

module.exports = function (callback, data) {
   const {client_secret, client_id, redirect_uris} = credentials;
   const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]
   );

   oAuth2Client.setCredentials(token);
   if (data) {
      callback(oAuth2Client, data);
   } else {
      callback(oAuth2Client);
   }
}