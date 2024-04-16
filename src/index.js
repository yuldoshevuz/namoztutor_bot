require('./config/db')
require('./helpers/sendPrayerTime')
require('./helpers/updatePrayerTimes')

const bot = require('./core/bot')
const stage = require('./scenes')
const isAuth = require('./middlewares/isAuth')
const isAdmin = require('./middlewares/isAdmin')
const errorHandler = require('./helpers/errorHandler')

const store = Redis({
    url: 'redis://127.0.0.1:6379',
    config: { password: '85627566' }
})

bot.use(session())
bot.use(stage.middleware())

bot.start(isAuth, async ctx => ctx.scene.enter('start'))
bot.command('admin', isAdmin, async ctx => ctx.scene.enter('admin'))

bot.catch(errorHandler)