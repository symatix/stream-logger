const {google} = require('googleapis');
const SHEET_ID = require('../config/sheet').sheet_id;

var range = "A2:Y1000";

module.exports = function (auth, data) {
   const sheets = google.sheets({version: 'v4', auth});
   
   sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID, 
      range: range, 
      valueInputOption: "USER_ENTERED", 
      resource: { values: data }
   }, (err, res) => {
      if (err) return console.log('The API returned an error: ' + err);
      const status = res.statusText;
      console.log(`Status of updating: ${status}`)
   })

}
