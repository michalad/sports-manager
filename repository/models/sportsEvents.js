"use strict";

let mongoDbClient = require('../../database/mongo');

let sportsEventsSchema = mongoDbClient.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

let SportsEvents = mongoDbClient.model('SportsEvents', sportsEventsSchema);
module.exports = SportsEvents;