const SportsEvents = require('../repository/models/sportsEvents');

function createSportEvent(req, res, next) {
    SportsEvents.create(req.body, function (err, sportEvent) {
        if (err) {
            res.status(400).send({error: err})
        } else {
            res.sendStatus(201);
        }
    });
}

function getAllSportsEvents(req, res, next) {
    SportsEvents.find(function (err, sportEvents) {
        if (err) {
            res.status(400).send({error: err})
        } else {
            res.json(sportEvents);
        }
    })
}

module.exports = {
    createSportEvent: createSportEvent,
    getAllSportsEvents: getAllSportsEvents
};


