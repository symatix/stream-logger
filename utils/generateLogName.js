/**
 * 
 * DEPRECATED
 */

// generates the name of the file, depending on the time of execution

module.exports = function(){
    const date = new Date().toLocaleDateString();
    let h = new Date().getHours();
    let m = new Date().getMinutes();

    if (h < 10 ) h = '0' + h;
    if (m < 10 ) m = '0' + m;

    return `log_${date}_${h}-${m}.txt`;
}



