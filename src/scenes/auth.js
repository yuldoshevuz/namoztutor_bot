const { Scenes } = require('telegraf')
const keyboards = require('../utils/keyboards')
const User = require('../models/User')
const PrayerTimes = require('../models/PrayerTimes')

const regions = require('../data/regions')

const isAuth = require('../middlewares/isAuth')
const errorHandler = require('../helpers/errorHandler')
const writePrayerTimes = require('../helpers/writePrayerTimes')

const authScene = new Scenes.WizardScene('auth', 
    async (ctx) => {
        try {
            if (ctx.has('callback_query')) {
                ctx.answerCbQuery('')
                const [ cursor, data ] = ctx.callbackQuery.data.split(':')
                const region = regions.find(item => item.name === data)

                if (cursor === 'region' && region) {
                    ctx.session.regionName = data

                    await ctx.editMessageText('Yaxshi! Endi esa shahar/tumanni tanlang', {
                        ...keyboards.cities(region.cities, false)
                    })
                    return ctx.wizard.next()
                }
            }
            if (ctx.has('message')) {
                ctx.deleteMessage()
            }
        } catch (error) {
            errorHandler(error, ctx)
        }
    },
    async (ctx) => {
        try {
            if (ctx.has('callback_query')) {
                ctx.answerCbQuery('')
                const [ cursor, data ] = ctx.callbackQuery.data.split(':')
                
                if (cursor === 'cities' && data === 'back') {                    
                    await ctx.editMessageText('Iltimos yashash hududingizni tanlang!', {
                        ...keyboards.regions(regions, false, ctx.session.regionName)
                    })
                    return ctx.wizard.back()
                }
                
                const region = regions.find(item => item.name === ctx.session.regionName)
                const city = region.cities.find(item => item === data)

                if (cursor === 'city' && city) {
                    ctx.session.cityName = data

                    await ctx.editMessageText('Namoz vaqlarini necha daqiqa oldin eslatishimizni istaysiz?', {
                        ...keyboards.reminder_time(false)
                    })
                    return ctx.wizard.next()
                }
            }
            if (ctx.has('message')) {
                ctx.deleteMessage()
            }
        } catch (error) {
            errorHandler(error, ctx)
        }
    },
    async (ctx) => {
        try {
            if (ctx.has('callback_query')) {
                ctx.answerCbQuery('')
                const [ cursor, data ] = ctx.callbackQuery.data.split(':')

                if (cursor === 'remind_time') {
                    if (data === 'back') {
                        const region = regions.find(item => item.name === ctx.session.regionName)

                        await ctx.editMessageText('Iltimos shahar/tumanni tanlang', {
                            ...keyboards.cities(region.cities, false, ctx.session.cityName)
                        })
                        return ctx.wizard.back()
                    }
                    if (data.match(/^(0|5|10|15|20)$/)) {
                        const { regionName, cityName } = ctx.session

                        const user = await User.findOneAndUpdate({ chat_id: ctx.from.id }, {
                            region: regionName,
                            city: cityName,
                            remind_time: data,
                            active: true
                        }, { returnOriginal: false })

                        delete ctx.session.regionName
                        delete ctx.session.cityName
                        ctx.session.user = user

                        await ctx.deleteMessage()
                        return ctx.scene.enter('start')
                    }
                }
            }
            if (ctx.has('message')) {
                ctx.deleteMessage()
            }
        } catch (error) {
            errorHandler(error, ctx)
        }
    }
)

authScene.start(isAuth, ctx => ctx.scene.enter('start'))

authScene.enter(async (ctx) => {
    try {
        const prayerTimes = await PrayerTimes.find()

        if (prayerTimes.length) {
            await ctx.replyWithHTML(
                `<b>Assalomu alaykum! 👋</b>\n`+
                "Kundalik ibodatlaringiz sizga yordam beruvchi Telegram botimizga xush kelibsiz.\n\n"+
                "<i>Iltimos yashash hududingizni tanlang!</i>",
                keyboards.regions(regions, false)
            )
        } else {
            await writePrayerTimes()
            await ctx.replyWithHTML(
                `<b>Assalomu alaykum! 👋</b>\n`+
                "Kundalik ibodatlaringiz sizga yordam beruvchi Telegram botimizga xush kelibsiz.\n\n"+
                "<i>Iltimos yashash hududingizni tanlang!</i>",
                keyboards.regions(regions, false)
            )
        }
    } catch (error) {
        errorHandler(error, ctx)
    }
})

module.exports = authScene