const { BOT_TOKEN } = require('../config/environments')
const {  Telegraf } = require('telegraf')

const bot = new Telegraf(BOT_TOKEN)

module.exports = bot