console.log('Connecting to db');
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sports-manager');
mongoose.connection.on('error', console.error.bind(console, '# MongoDB - connection error:'));

mongoose.connection.once('open', function () {
    console.log('Connected to DB!')
});

module.exports = mongoose;