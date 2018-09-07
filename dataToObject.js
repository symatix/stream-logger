// create an object from parsed html
module.exports = function(data) {
    return {
        current_listeners: data[0],
        stream_status: data[1],
        peak_listeners: data[2],
        max_listeners: data[3],
        unique_listeners: data[4],
        bitrate: data[5],
        metada: data[6],
    }
}