const express = require('express');
const router = express.Router();
const sportEventsController = require('../controller/sport-events-controller');
const matchesController = require('../controller/matches-controller');
const teamController = require('../controller/team-controller');
const tableController = require('../controller/table-controller');
const registrationController = require('../controller/auth/registration-controller');

router.get('/sport-events', sportEventsController.getAllSportEvents);
router.post('/sport-events', sportEventsController.createSportEvent);
router.get('/sport-events/:id/details', sportEventsController.getSportEventById);


router.post('/sport-events/:id/matches', matchesController.createMatch);
router.get('/sport-events/:id/matches', matchesController.getMatchesForGivenEvent);
router.post('/sport-events/:id/teams', teamController.createTeam);
router.get('/sport-events/:id/teams', teamController.getTeamsForGivenEvent);

router.get('/sport-events/:id/table', tableController.getTableForCurrentSportEvent);

router.post('/register', registrationController.register);

module.exports = router;
