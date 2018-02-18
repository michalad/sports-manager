const jwtSecret=  process.env.JWT_SECRET || 'SECRET';


module.exports = {
    jwtSecret: jwtSecret
};