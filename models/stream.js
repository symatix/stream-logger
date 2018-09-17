const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define user model
const streamSchema = new Schema({
    station: String,
    current_song: String,
    current_listeners: Number,
    stream_status: Number,
    peak_listeners: Number,
    max_listeners: Number,
    unique_listeners: Number,
    bitrate: Number,
    time: String
}, { collection: 'streams' })

module.exports = mongoose.model('streams', streamSchema);

