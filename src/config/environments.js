require('dotenv').config()
const {
    BOT_TOKEN,
    DB_URI,
    ERROR_CHANNEL,
    PORT,
    SERVER_URL,
    ADMINS
} = process.env

module.exports = {
    BOT_TOKEN,
    DB_URI,
    ERROR_CHANNEL,
    PORT: PORT || 4000,
    SERVER_URL,
    ADMINS: ADMINS.split(',')
}