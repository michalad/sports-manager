const jwtSecret=  process.env.JWT_SECRET || 'SECRET';
const databaseUrl=  process.env.DATABASE_URL || 'mongodb://localhost:27017/sports-manager';



module.exports = {
    jwtSecret: jwtSecret,
    databaseUrl: databaseUrl
};