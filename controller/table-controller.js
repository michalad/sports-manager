
function getTableForCurrentSportEvent(req, res, next) {
    return res.json(
        [
            {
                team: "B",
                points: 0,
                played: 0,
                won: 0,
                draw: 0,
                loss: 0,
                goalsFor: 0,
                goalsAgainst: 0,
                goalDifference: 0
            },
            {
                team: "C",
                points: 0,
                played: 0,
                won: 0,
                draw: 0,
                loss: 0,
                goalsFor: 0,
                goalsAgainst: 0,
                goalDifference: 0
            },
            {
                team: "A",
                points: 0,
                played: 0,
                won: 0,
                draw: 0,
                loss: 0,
                goalsFor: 0,
                goalsAgainst: 0,
                goalDifference: 0
            }

        ]
    )
}


module.exports = {
    getTableForCurrentSportEvent: getTableForCurrentSportEvent
};