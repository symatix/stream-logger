const {google} = require('googleapis');
const token = require('../config/token');
const credentials = require('../config/credentials');

module.exports = function (callback) {
   const {client_secret, client_id, redirect_uris} = credentials;
   const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]
   );

   oAuth2Client.setCredentials(token);
   callback(oAuth2Client);
}