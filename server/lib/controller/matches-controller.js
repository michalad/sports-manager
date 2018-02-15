const sportEventsHelper = require('../helpers/sport-events-helper');
const Match = require('../repository/models/match');

function createMatch(req, res, next) {
    const sportEventId = req.params.id;

    // TODO this check does not work!!!!
    if (!sportEventsHelper.checkSportEventExists(sportEventId)) {
        return res.status(400).send({error: 'Unable to find sport event with given id: ' + sportEventId})
    }

    let match = req.body;
    match.sportEventId = sportEventId;
    Match.create(match, function (err, match) {
        if (err) {
            res.status(400).send({error: err})
        } else {
            res.status(201).send(match);
        }
    });
}

function getMatchesForGivenEvent(req, res, next) {
    const sportEventId = req.params.id;
    if (!sportEventsHelper.checkSportEventExists(sportEventId)) {
        return res.status(400).send({error: 'Unable to find sport event with given id: ' + sportEventId})
    }

    let query = {
        sportEventId: sportEventId
    };

    Match.find(query, function (err, matches) {
        if (err) {
            res.status(400).send({error: err})
        } else {
            res.json(matches);
        }
    })

}

module.exports = {
    createMatch: createMatch,
    getMatchesForGivenEvent: getMatchesForGivenEvent
};