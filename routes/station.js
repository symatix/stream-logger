const streamDB = require('../db/streamDB.js');
const Stream = require('../models/stream');
const Station = require('../models/station');

module.exports = (app) => {
    app.get('/api/stations', async (req, res) => {
        const stations = await Station.find({}, null, {sort: {station: 1}});
        res.send(stations);
    })

    app.post('/api/stations/add', (req, res) => {
        var newStation = new Station(req.body);

        newStation.save(function(err, s){
            if (err) return console.log("Error: ", err);
            res.send(s)
        })
    })

    app.post('/api/stations/remove', (req, res) => {
        const {station} = req.body;
        Station.remove({station}, (err, station) => {
            if (err) return console.log(err);
            console.log("==> removed from stations")
        });
        Stream.remove({station}, (err, stream) => {
            if (err) return console.log(err);
            console.log("==> removed from streams")
        });

        res.send("==> removed: ", station)
    })


    app.get('/api/stations/add-all', (req, res) => {
        streamDB.map(station => {
            var newStation = new Station(station);
            newStation.save(function(err, s){
                if (err) return console.log("Error: ", err);
            })
        })
        res.send("populated")
    })
}