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

module.exports = mongoDbClient.model('Team', teamSchema);
