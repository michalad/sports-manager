const express = require('express');
const router = express.Router();
const sportEventsController = require('../controller/sport-events-controller');
const matchesController = require('../controller/matches-controller');
const teamController = require('../controller/team-controller');
const tableController = require('../controller/table-controller');
const registrationController = require('../controller/auth/registration-controller');
const loginController = require('../controller/auth/login-controller');

const authCheckMiddleware = require('../helpers/auth-check');

router.get('/sport-events', sportEventsController.getAllSportEvents);
router.post('/sport-events', authCheckMiddleware, sportEventsController.createSportEvent);
router.get('/sport-events/:id/details', sportEventsController.getSportEventById);


router.post('/sport-events/:id/matches', authCheckMiddleware, matchesController.createMatch);
router.get('/sport-events/:id/matches', matchesController.getMatchesForGivenEvent);
router.post('/sport-events/:id/teams', authCheckMiddleware, teamController.createTeam);
router.get('/sport-events/:id/teams', teamController.getTeamsForGivenEvent);

router.get('/sport-events/:id/table', tableController.getTableForCurrentSportEvent);

router.post('/register', registrationController.register);
router.post('/login', loginController.login);

module.exports = router;
