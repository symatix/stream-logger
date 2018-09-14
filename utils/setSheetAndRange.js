const {RANGE} = require('../config/sheet');

// returns sheet name with range used to write data to correct sheet depending on month and year


module.exports = function(){
    let month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    if (month < 10 ){
        month = "0" + month;
    }
    
    return `log_${month}-${year}!${RANGE}`
}

//TODO: implement automatic sheet creation