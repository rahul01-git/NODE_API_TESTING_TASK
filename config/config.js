const dotenv = require("dotenv");
dotenv.config();
const appConfig = {
    APP_PORT: process.env.APP_PORT,
    HOST: process.env.DB_HOST,
    DATABASE: process.env.DB_DATABASE,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    PORT : process.env.DB_PORT,
}

module.exports = appConfig