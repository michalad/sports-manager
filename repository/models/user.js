"use strict";

let mongoDbClient = require('../../database/mongo');
const bcrypt = require('bcrypt');

let UserSchema = mongoDbClient.Schema({
    username: {
        type: String,
        required: true,
        index: {unique: true}
    },
    password: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true,
    }
});



UserSchema.methods.comparePassword = function comparePassword(password, callback) {
    bcrypt.compare(password, this.password, callback);
};

UserSchema.pre('save', function saveHook(next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    return bcrypt.genSalt((saltError, salt) => {
        if (saltError) {
            return next(saltError);
        }

        return bcrypt.hash(user.password, salt, (hashError, hash) => {
            if (hashError) {
                return next(hashError);
            }
            user.password = hash;
            return next();
        });
    });
});

module.exports = mongoDbClient.model('User', UserSchema);
