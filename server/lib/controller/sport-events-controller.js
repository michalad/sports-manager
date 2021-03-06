const SportsEvents = require('../repository/models/sportsEvents');

function createSportEvent(req, res, next) {
    SportsEvents.create(req.body, function (err, sportEvent) {
        if (err) {
            res.status(400).send({error: err})
        } else {
            res.status(201).send(sportEvent);
        }
    });
}

function getAllSportEvents(req, res, next) {
    SportsEvents.find(function (err, sportEvents) {
        if (err) {
            res.status(400).send({error: err})
        } else {
            let sortedEvents = sportEvents.sort(function(a,b){
                return new Date(b.date) - new Date(a.date);
            });

            res.json(sortedEvents);
        }
    })
}

function getSportEventById(req, res, next) {
    let query = {
        _id: req.params.id
    };
    SportsEvents.find(query, function (err, sportEvent) {
        if (err) {
            res.status(400).send({error: err})
        } else {
            if (sportEvent.length > 0) {
                res.json(sportEvent);
            } else {
                res.sendStatus(404);
            }
        }
    })
}

module.exports = {
    createSportEvent: createSportEvent,
    getAllSportEvents: getAllSportEvents,
    getSportEventById: getSportEventById
};


