console.log('Connecting to db');
const config = require('../config/config');
let mongoose = require('mongoose');
mongoose.connect(config.databaseUrl);
mongoose.connection.on('error', console.error.bind(console, '# MongoDB - connection error:'));

mongoose.connection.once('open', function () {
    console.log('Connected to DB!')
});

module.exports = mongoose;