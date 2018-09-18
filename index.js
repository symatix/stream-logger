const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schedule = require('node-schedule');
const formatTime = require('./utils/formatTime');;

const PORT = process.env.PORT || 5000;
// helper functions

// set up db
require('./models/station');
require('./models/stream');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://gazda:gazda.321@ds257372.mlab.com:57372/logger', { useNewUrlParser: true });

// set up server
const app = express();
app.use(bodyParser.json());
require('./routes/station')(app);
require('./routes/stream')(app);

// initiate scan of streams
// setInterval(() => {
// 	axios.get(`http://localhost:${PORT}/api/streams/scan`).then(res => {
// 		console.log(`==> scanned ${res.data.length} stations at ${formatTime()}`)
// 	}).catch(e => console.log(e))
// }, 300000)

// this is used in production
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'))

	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

app.listen(PORT);
console.log("[SERVER] port => " + PORT)