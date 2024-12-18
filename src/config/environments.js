require('dotenv').config()
const {
    BOT_TOKEN,
    DB_URI,
    ERROR_CHANNEL,
    PORT,
    SERVER_URL,
    ADMINS,
    API_BASE_URL,
} = process.env

module.exports = {
    BOT_TOKEN,
    DB_URI,
    ERROR_CHANNEL,
    PORT: PORT || 4000,
    API_BASE_URL,
    SERVER_URL,
    ADMINS: ADMINS ? ADMINS.split(',') : []
}
