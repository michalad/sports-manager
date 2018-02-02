var express = require('express');
var router = express.Router();

router.get('/sport-events', function (req, res, next) {
    res.json([
        {
            "id": "123",
            date: 'xxxxx',
            name: 'sampleName1'
        },
        {
            "id": "125",
            date: 'xxxxx',
            name: 'sampleName2'
        },
        {
            "id": "124",
            date: 'xxxxx',
            name: 'sampleName3'
        }
    ]);
});

router.post('/sport-events', function (req, res, next) {
    let eventBody = req.body;

    console.log(eventBody);

    if (!eventBody.name) {
        res.status(400);
        res.json({
            message: "Missing name"
        })
    }

    if (!eventBody.date) {
        res.status(400);
        res.json({
            message: "Missing date"
        })
    }

    res.sendStatus(201);

});

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
