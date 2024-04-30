const { Scenes, Markup } = require('telegraf')
const errorHandler = require('../helpers/errorHandler')
const keyboards = require('../utils/keyboards')
const categories = require('../data/categories')
const sendPaginationData = require('../helpers/sendPaginationData')

const cleaningScene = new Scenes.BaseScene('cleaning')

cleaningScene.enter(async (ctx) => {
    try {
        const { cancel } = ctx.scene.state

        if (cancel) {
            ctx.reply('☑️ Bekor qilindi', keyboards.poklanish())
        } else {
            ctx.reply('💦 Poklanish', keyboards.poklanish())
        }
    } catch (error) {
        errorHandler(error, ctx)
    }
})

cleaningScene.hears('💧 Tahorat nima?', async (ctx) => {
    try {
        const category = categories.find(item => item.category === 'POKLANISH')
        const subCategory = category.items.find(item => item.sub_category === 'TAHORAT_NIMA')

        await ctx.replyWithHTML(subCategory.items[0])
    } catch (error) {
        errorHandler(error)
    }
})

cleaningScene.hears('💦 Tahorat olish', async (ctx) => {
    try {
        const category = categories.find(item => item.category === 'POKLANISH')
        const subCategory = category.items.find(item => item.sub_category === "TAHORAT_OLISH_TARTIBI")
        const item = subCategory.items[0]

        await ctx.reply(ctx.message?.text, Markup.removeKeyboard())
        await ctx.replyWithPhoto(item.media, {
            caption: item.text,
            parse_mode: 'HTML',
            ...keyboards.backAndNext({
                cursor: subCategory.sub_category,
                keyboards: null,
                page: 0,
                start: item.start,
                end: item.end
            })
        })
    } catch (error) {
        errorHandler(error, ctx)
    }
})

cleaningScene.hears('💨 Tahoratni buzadigan hollar', async (ctx) => {
    try {
        const category = categories.find(item => item.category === 'POKLANISH')
        const subCategory = category.items.find(item => item.sub_category === 'TAHORATNI_BUZADIGAN_HOLLAR')
        
        await ctx.replyWithHTML(subCategory.items[0])
    } catch (error) {
        errorHandler(error, ctx)
    }
})

cleaningScene.hears("🚿 G'usl", async (ctx) => {
    try {
        const category = categories.find(item => item.category === 'POKLANISH')
        const subCategory = category.items.find(item => item.sub_category === "G'USL")
        
        await ctx.replyWithHTML(subCategory.items[0])
    } catch (error) {
        errorHandler(error, ctx)
    }
})

cleaningScene.hears('✨ Tayammum', async (ctx) => {
    try {
        const category = categories.find(item => item.category === 'POKLANISH')
        const subCategory = category.items.find(item => item.sub_category === 'TAYAMMUM')
        
        await ctx.replyWithHTML(subCategory.items[0])
    } catch (error) {
        errorHandler(error, ctx)
    }
})

cleaningScene.hears('⬅️ Ortga', ctx => ctx.scene.enter('start'))

cleaningScene.action(async (callbackData, ctx) => {
    try {
        ctx.answerCbQuery()
        const [ cursor ] = callbackData.split(':')

        if (cursor === 'quit_process') {
            ctx.deleteMessage()
            return ctx.scene.enter('cleaning', { cancel: true })
        }

        if (cursor === "TAHORAT_OLISH_TARTIBI") {
            await sendPaginationData(ctx, 'POKLANISH', callbackData)
        }
    } catch (error) {
        errorHandler(error, ctx)
    }
})

module.exports = cleaningScene