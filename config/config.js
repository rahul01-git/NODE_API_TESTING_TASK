const dotenv = require("dotenv");
dotenv.config();
const appConfig = {
    APP_PORT: process.env.APP_PORT,
}

module.exports = appConfig