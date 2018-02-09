const sportEventsHelper = require('../helpers/sport-events-helper');
const Team = require('../repository/models/team');

function createTeam(req, res, next) {
    const sportEventId = req.params.id;

    if (!sportEventsHelper.checkSportEventExists(sportEventId)) {
        return res.status(400).send({error: 'Unable to find sport event with given id: ' + sportEventId})
    }

    let match = req.body;
    match.sportEventId = sportEventId;
    Team.create(match, function (err, team) {
        if (err) {
            res.status(400).send({error: err})
        } else {
            res.status(201).send(team);
        }
    });
}



function getTeamsForGivenEvent(req, res, next) {
    const sportEventId = req.params.id;
    if (!sportEventsHelper.checkSportEventExists(sportEventId)) {
        return res.status(400).send({error: 'Unable to find sport event with given id: ' + sportEventId})
    }

    let query = {
        sportEventId: sportEventId
    };

    Team.find(query, function (err, matches) {
        if (err) {
            res.status(400).send({error: err})
        } else {
            res.json(matches);
        }
    })

}

module.exports = {
    createTeam: createTeam,
    getTeamsForGivenEvent: getTeamsForGivenEvent
};