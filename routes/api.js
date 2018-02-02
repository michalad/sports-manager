const express = require('express');
const router = express.Router();
const sportEventsController = require('../controller/sportEventsController');
const sportMatchesController = require('../controller/matchesController');

router.get('/sport-events', sportEventsController.getAllSportEvents);
router.post('/sport-events', sportEventsController.createSportEvent);
router.get('/sport-events/:id/details', sportEventsController.getSportEventById);

router.post('/sport-events/:id/matches', sportMatchesController.createMatch);
router.get('/sport-events/:id/matches', sportMatchesController.getMatchesForGivenEvent);

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
