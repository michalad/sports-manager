const SportsEvents = require('../repository/models/sportsEvents');

function checkSportEventExists(id) {
    let query = {
        _id: id
    };
    return SportsEvents.find(query, function (err, sportEvent) {
        if (err) {
            return false;
        } else {
            return sportEvent.length > 0
        }
    })
}

module.exports = {
    checkSportEventExists: checkSportEventExists
};