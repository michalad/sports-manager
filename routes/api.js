const express = require('express');
const router = express.Router();
const sportEventsController = require('../controller/sport-events-controller');
const matchesController = require('../controller/matches-controller');
const tableController = require('../controller/table-controller');

router.get('/sport-events', sportEventsController.getAllSportEvents);
router.post('/sport-events', sportEventsController.createSportEvent);
router.get('/sport-events/:id/details', sportEventsController.getSportEventById);

router.post('/sport-events/:id/matches', matchesController.createMatch);
router.get('/sport-events/:id/matches', matchesController.getMatchesForGivenEvent);

router.get('/sport-events/:id/table', tableController.getTableForCurrentSportEvent);

module.exports = router;
