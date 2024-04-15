require('dotenv').config()
const {
    BOT_TOKEN,
    DB_URI,
    ERROR_CHANNEL
} = process.env

module.exports = {
    BOT_TOKEN,
    DB_URI,
    ERROR_CHANNEL
}