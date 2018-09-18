const getDataFromAllStations = require('../utils/getDataFromAllStations');
const Station = require('../models/station');
const Stream = require('../models/stream');

module.exports = (app) => {

    app.get('/api/streams/scan', async (req, res) => {
        const stations = await Station.find({}, null, {sort: {station: 1}});

        getDataFromAllStations(stations, [])
            .then(data => {
                Stream.insertMany(data, function (err, docs) { 
                    if (err) return console.log("Error on scan and insert: ", err)
                    res.send(docs);
                });
            }).catch(e => console.log(e))
    })

    app.get('/api/streams', async (req, res) => {
        const streams = await Stream.find({}, null, {sort: {station: 1}});
        res.send(streams);
    })
    app.get('/api/streams/:station', async (req, res) => {
        const { station } = req.params;
        const streams = await Stream.find({ station }, null, {sort: {time: 1}});
        res.send(streams);
    })
}