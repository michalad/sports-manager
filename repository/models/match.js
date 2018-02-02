"use strict";

let mongoDbClient = require('../../database/mongo');

let matchSchema = mongoDbClient.Schema({
    sportEventId: {
        type: String,
        required: true
    },
    teamA: {
        name: {
            type: String,
            required: true
        },
        result: {
            type: Number,
            required: true
        }
    },
    teamB: {
        name: {
            type: String,
            required: true
        },
        result: {
            type: Number,
            required: true
        }
    }
});

let MatchSchema = mongoDbClient.model('Match', matchSchema);
module.exports = MatchSchema;
