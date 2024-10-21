const { Scenes } = require('telegraf')
const keyboards = require('../utils/keyboards')
const isAuth = require('../middlewares/isAuth')
const errorHandler = require('../helpers/errorHandler')

const User = require('../models/User')

const regions = require('../data/regions')
const PrayerTimes = require('../models/PrayerTimes')

const settingsScene = new Scenes.BaseScene('settings')

settingsScene.enter(async ctx => ctx.reply('⚙️ Sozlamalar', keyboards.settings() ))

settingsScene.hears('⬅️ Ortga', ctx => ctx.scene.enter('start'))

settingsScene.hears("🏙 Shaharni o'zgartirish", async (ctx) => {
    try {
        await ctx.reply(ctx.message.text, { reply_markup: { remove_keyboard: true } })
        await ctx.reply(
            'Hududingizni tanlang!',
            keyboards.regions(regions, true, ctx.session.user.region)
        )
    } catch (error) {
        errorHandler(error, ctx)
    }
})

settingsScene.hears("🕰 Eslatma vaqtini o'zgartirish", async (ctx) => {
    try {
        await ctx.reply(ctx.message.text, { reply_markup: { remove_keyboard: true } })
        await ctx.reply("Eslatma vaqtini o'zgartirish", keyboards.reminder_time(true, ctx.session.user.remind_time))
    } catch (error) {
        errorHandler(error, ctx)
    }
})

settingsScene.start(isAuth, ctx => ctx.scene.enter('start'))
settingsScene.hears((text, ctx) => ctx.deleteMessage())
settingsScene.action(async (cb_data, ctx) => {
    try {
        ctx.answerCbQuery()
        
        if (cb_data === 'cancel') {
            delete ctx.session?.region
            await ctx.deleteMessage()
            await ctx.reply('☑️ Bekor qilindi', keyboards.settings())
            return ctx.scene.enter('settings', {}, true)
        }
        
        const [ cursor, data ] = cb_data.split(':')
        const { user } = ctx.session 

        if (cursor === 'cities' && data ==='back') {            
            ctx.editMessageText(
                'Hududingizni tanlang!', {
                ...keyboards.regions(regions, true, ctx.session.user.region)
            })
        } else if (cursor === 'region' && data) {
            const region = regions.find(item => item.name === data)
            
            ctx.session.region = region
            await ctx.editMessageText('Iltimos shahar/tumanni tanlang', {
                ...keyboards.cities(region.cities, true, ctx.session.user.city)
            })
        } else if (cursor === 'city' && ctx.session.region) {
            const region = ctx.session.region
            const city = region.cities.find(item => item === data)
            
            const prayertimes = await PrayerTimes.findOne({ region: region.name, city })
            
            if (prayertimes) {
                const updated = await User.findOneAndUpdate(
                    { chat_id: ctx.from.id },
                    { region: region.name, city },
                    { returnOriginal: false }
                )
    
                await ctx.deleteMessage()
                await ctx.reply("✅ Shahar muvaffaqiyatli o'zgartirildi!", keyboards.home())
                
                delete ctx.session.region
                ctx.session.user = updated
            } else {
                await ctx.deleteMessage()
                await ctx.reply("Shaharga oid namoz vaqtlari topilmadi. Iltimos adminga murojaat qiling")
            }

            ctx.scene.enter('start', {}, true)
        } else if (cursor === 'remind_time' && data.match(/^(0|5|10|15|20)$/)) {
            const updated = await User.findOneAndUpdate(
                { chat_id: user.chat_id },
                { remind_time: data },
                { returnOriginal: false }
            )

            await ctx.deleteMessage()
            await ctx.reply("✅ Eslatma vaqti muvaffaqiyatli o'zgartirildi!", keyboards.home())
            
            ctx.session.user = updated
            ctx.scene.enter('start', {}, true)
        }
    } catch (error) {
        errorHandler(error, ctx)
    }
})

module.exports = settingsScene