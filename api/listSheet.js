const {google} = require('googleapis');
const SHEET_ID = require('../config/sheet').sheet_id;

module.exports = function(auth) {
   const sheets = google.sheets({version: 'v4', auth});
   sheets.spreadsheets.values.get({
     spreadsheetId: SHEET_ID,
     range: 'logs!A1:C5',
   }, (err, res) => {
     if (err) return console.log('The API returned an error: ' + err);
     const rows = res.data.values;
     if (rows.length) {
       console.log('Name, Major:');
       // Print columns A and E, which correspond to indices 0 and 4.
       rows.map((row) => {
         console.log(`${row[0]}, ${row[1]}, ${row[2]}`);
       });
     } else {
       console.log('No data found.');
     }
   });
 }

