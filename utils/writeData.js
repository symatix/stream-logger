// generates a string to be written to log file with data for the given station

module.exports = function({current_song, current_listeners, station}){
    return `Station: ${station}\nSong: ${current_song}\nListeners: ${current_listeners}\n--------------------\n\n`
}