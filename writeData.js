// generates a string to be written to log file with data for the given station

module.exports = function(data, station){
    return `Station: ${station}\nSong: ${data[6]}\nListeners: ${data[0]}\n--------------------\n\n`
}