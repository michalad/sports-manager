const User = require('../../repository/models/user');
const passport = require('passport');
const PassportLocalStrategy = require('passport-local').Strategy;

function register(req, res, next) {
    return passport.authenticate('local-signup', (err) => {
        if (err) {
            if (err.code === 11000) {
                // the 11000 Mongo code is for a duplication email error
                // the 409 HTTP status code is for conflict error
                return res.status(409).json({
                    success: false,
                    message: 'Check the form for errors.',
                    errors: {
                        email: 'This username is already taken.'
                    }
                });
            }
            return res.status(400).json({
                success: false,
                message: 'Could not process the form.'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'You have successfully signed up! Now you should be able to log in.'
        });
    })(req, res, next);
}

passport.use('local-signup', new PassportLocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
}, (req, username, password, done) => {
    const userData = {
        username: username.trim(),
        password: password.trim(),
        isActive: false
    };

    const newUser = new User(userData);
    newUser.save((err) => {
        if (err) {
            return done(err);
        }

        return done(null);
    });
}));

module.exports = {
    register: register
};