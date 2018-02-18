const jwt = require('jsonwebtoken');
const User = require('../../repository/models/user');
const passport = require('passport');
const PassportLocalStrategy = require('passport-local').Strategy;

function login(req, res, next) {
    return passport.authenticate('local-login', (err, token, userData) => {
        if (err) {
            if (err.name === 'IncorrectCredentialsError' || err.name === 'AccountInactiveError') {
                return res.status(200).json({
                    success: false,
                    message: err.message
                });
            }

            return res.status(400).json({
                success: false,
                message: 'Could not process the form.'
            });
        }

        if(!token) {
            return res.status(400).json({
                success: false,
                message: 'Could not process the form.'
            });
        }

        return res.json({
            success: true,
            message: 'You have successfully logged in!',
            token,
            username: userData.username
        });
    })(req, res, next);
}

passport.use('local-login', new PassportLocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
}, (req, username, password, done) => {
    const userData = {
        username: username.trim(),
        password: password.trim()
    };

    // find a user by email address
    return User.findOne({username: userData.username}, (err, user) => {
        if (err) {
            return done(err);
        }

        if (!user) {
            const error = new Error('Incorrect email or password');
            error.name = 'IncorrectCredentialsError';

            return done(error);
        }


        return user.comparePassword(userData.password, (passwordErr, isMatch) => {
            if (err) {
                return done(err);
            }

            if (!isMatch) {
                const error = new Error('Incorrect email or password');
                error.name = 'IncorrectCredentialsError';

                return done(error);
            }

            if (!user.isActive) {
                const error = new Error('Your account is inactive, please contact administrator');
                error.name = 'AccountInactiveError';

                return done(error);
            }

            const payload = {
                sub: user._id
            };

            // create a token string
            // TODO externalise secret !!!!
            const token = jwt.sign(payload, 'SECRET');
            const data = {
                username: user.username
            };

            return done(null, token, data);
        });
    });
}));

module.exports = {
    login: login
};