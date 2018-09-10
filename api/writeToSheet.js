const {google} = require('googleapis');
const {SHEET_ID} = require('../config/sheet');
const calculateRange = require('../utils/calculateRange');


module.exports = function (auth, data) {
   const sheets = google.sheets({version: 'v4', auth});
   
   sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID, 
      range: calculateRange(), 
      valueInputOption: "USER_ENTERED", 
      resource: { values: data }
   }, (err, res) => {
      if (err) return console.log('The API returned an error: ' + err);
      const status = res.statusText;
      console.log(`=> status of update at ${new Date().toLocaleString()}: [${status}]`)
   })

}
