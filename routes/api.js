const express = require('express');
const router = express.Router();
const sportEventsController = require('../controller/sportEventsController');

router.get('/sport-events', sportEventsController.getAllSportsEvents);
router.post('/sport-events', sportEventsController.createSportEvent);

/*{
    "teamA": {
    "name": "zc",
        "result": 2
},
    "teamB": {
    "name": "zc",
        "result": 2
}
}*/
router.post('/sport-events/:id/matches', function (req, res, next) {
    console.log(req.body);
    res.sendStatus(201);
});

router.get('/sport-events/:id/details', function (req, res, next) {
    res.json(
        {
            date: 'xxxxx',
            name: 'sampleName1'
        }
    );
});

router.get('/sport-events/:id/matches', function (req, res, next) {
    res.json(
        [
            {
                teamA: {
                    name: "A",
                    result: 2
                },
                teamB: {
                    name: "C",
                    result: 5
                }
            },
            {
                teamA: {
                    name: "B",
                    result: 1
                },
                teamB: {
                    name: "C",
                    result: 3
                }
            }

        ]
    );
});

router.get('/sport-events/:id/table', function (req, res, next) {
    res.json(
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
    );
});

module.exports = router;
