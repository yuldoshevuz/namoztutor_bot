const { Scenes } = require('telegraf')
const keyboards = require('../utils/keyboards')
const isAuth = require('../middlewares/isAuth')
const generateText = require('../helpers/generateText')
const errorHandler = require('../helpers/errorHandler')

const PrayerTimes = require('../models/PrayerTimes')

const startScene = new Scenes.BaseScene('start')

startScene.enter(async (ctx) => {
    const { user } = ctx.session
    const prayertimes = await PrayerTimes.findOne({ region: user.region, city: user.city })
    const text = generateText.day(prayertimes)

    await ctx.replyWithHTML(text, keyboards.home())
})

startScene.hears('🕔 Namoz vaqtlari', async (ctx) => {
    try {
        const { user } = ctx.session
        const prayertimes = await PrayerTimes.findOne({ region: user.region, city: user.city })
        const text = generateText.day(prayertimes)

        await ctx.replyWithHTML(text, keyboards.home())
    } catch (error) {
        errorHandler(error, ctx)
    }
})

startScene.hears('👤 Profilim', async (ctx) => {
    try {
        const user = ctx.session.user
        const text =
            `<b>👤 To'liq ismingiz:</b> ${ctx.from.first_name} ${ ctx.from.last_name ? ctx.from.last_name : '' }\n\n`+
            `<b>🌏 Viloyat:</b> ${user.region}\n\n`+
            `<b>🌏 Shahar/tuman:</b> ${user.city}\n\n`+
            `<b>🕔 Eslatma vaqti:</b> ${ user.remind_time === 0 ? "O'z vaqtida" : user.remind_time+' daqiqa oldin' }`

        await ctx.replyWithHTML(text, keyboards.home())
    } catch (error) {
        errorHandler(error, ctx)
    }
})

startScene.hears('⚙️ Sozlamalar', ctx => ctx.scene.enter('settings'))
startScene.start(isAuth, ctx => ctx.scene.enter('start'))

startScene.on('callback_query', ctx => ctx.answerCbQuery(''))

module.exports = startScene