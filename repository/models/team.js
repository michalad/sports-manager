"use strict";

let mongoDbClient = require('../../database/mongo');

let teamSchema = mongoDbClient.Schema({
    sportEventId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    }
});

let MatchSchema = mongoDbClient.model('Team', teamSchema);
module.exports = MatchSchema;
