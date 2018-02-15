const tableCalculator = require('../table/table-calculator');
const sportEventsHelper = require('../helpers/sport-events-helper');
const Match = require('../repository/models/match');

function getTableForCurrentSportEvent(req, res, next) {
    const sportEventId = req.params.id;
    if (!sportEventsHelper.checkSportEventExists(sportEventId)) {
        return res.status(400).send({error: 'Unable to find sport event with given id: ' + sportEventId})
    }

    let query = {
        sportEventId: sportEventId
    };

    Match.find(query, function (err, matches) {
        if (err) {
            return res.status(400).send({error: err})
        } else {
            return res.json(tableCalculator.calculateTable(matches))
        }
    });
}

module.exports = {
    getTableForCurrentSportEvent: getTableForCurrentSportEvent
};