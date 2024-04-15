require('./config/db')
require('./helpers/sendPrayerTime')
require('./helpers/updatePrayerTimes')

const { session } = require('telegraf')
const bot = require('./core/bot')
const stage = require('./scenes')
const isAuth = require('./middlewares/isAuth')
const isAdmin = require('./middlewares/isAdmin')
const errorHandler = require('./helpers/errorHandler')
const { PORT } = require('./config/environments')

bot.use(session())
bot.use(stage.middleware())

bot.start(isAuth, async ctx => ctx.scene.enter('start'))
bot.command('admin', isAdmin, async ctx => ctx.scene.enter('admin'))

bot.catch(errorHandler)

bot.launch({
    webhook: {
        domain: 'https://bots.yuldoshev.uz/namozvaqtlari_reminderbot',
        port: PORT || 4000,
    }
}, () => {
    console.log('Bot launched')
})