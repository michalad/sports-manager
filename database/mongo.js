console.log('Connecting to db');
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sportsmanager');
mongoose.connection.on('error', console.error.bind(console, '# MongoDB - connection error:'));

module.exports = mongoose;