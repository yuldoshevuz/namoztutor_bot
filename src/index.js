require('./config/db')
require('./helpers/sendPrayerTime')
require('./helpers/updatePrayerTimes')

const { session } = require('telegraf')
const bot = require('./core/bot')
const stage = require('./scenes')
const isAuth = require('./middlewares/isAuth')
const isAdmin = require('./middlewares/isAdmin')
const errorHandler = require('./helpers/errorHandler')

bot.use(session())
bot.use(stage.middleware())

bot.start(isAuth, async ctx => ctx.scene.enter('start'))
bot.command('admin', isAdmin, async ctx => ctx.scene.enter('admin'))

bot.catch(errorHandler)

bot.launch(() => {
    console.log('Bot launched')
})