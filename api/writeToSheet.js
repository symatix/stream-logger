const {google} = require('googleapis');
const SHEET_ID = require('../config/sheet').sheet_id;

var values = [
  [
    "6-a", "6-b", "6-c"
  ],
  [
    "7-a", "7-b", "7-c"
  ],
  // Additional rows ...
];
var body = {
  values: values
};

var range = "A1:C10";

module.exports = function (auth) {
   const sheets = google.sheets({version: 'v4', auth});
   
   sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID, 
      range: range, 
      valueInputOption: "USER_ENTERED", 
      resource: body
   }, (err, res) => {
      if (err) return console.log('The API returned an error: ' + err);
      const status = res.statusText;
      console.log(`Status of updating: ${status}`)
   })

}
