require('dotenv').config()
const {
    BOT_TOKEN,
    DB_URI,
    ERROR_CHANNEL,
    PORT,
    SERVER_URL,
    ENV
} = process.env

module.exports = {
    BOT_TOKEN,
    DB_URI,
    ERROR_CHANNEL,
    PORT,
    SERVER_URL,
    ENV
}