const { Scenes, Markup } = require('telegraf')
const errorHandler = require('../helpers/errorHandler')
const keyboards = require('../utils/keyboards')
const categories = require('../data/categories')
const sendPaginationData = require('../helpers/sendPaginationData')

const namazForMenScene = new Scenes.BaseScene('namaz_for_men')

namazForMenScene.enter(async (ctx) => {
    try {
        const { cancel } = ctx.scene.state

        if (cancel) {
            ctx.reply('☑️ Bekor qilindi', keyboards.namoz('erkak'))
        } else {
            ctx.reply('🙆‍♂️ Namoz (erkaklar)', keyboards.namoz('erkak'))
        }
    } catch (error) {
        errorHandler(error, ctx)
    }
})

namazForMenScene.hears("🗣 Azon va iqomat", async (ctx) => {
    try {
        const category = categories.find(item => item.category === "ERKAKLAR_UCHUN_NAMOZ")
        const subCategory = category.items.find(item => item.sub_category === "AZON")
        const item = subCategory.items[0]

        await ctx.reply(ctx.message?.text, Markup.removeKeyboard())
        await ctx.replyWithPhoto(item.media, {
            caption: item.text,
            parse_mode: 'HTML',
            ...keyboards.backAndNext({
                cursor: subCategory.sub_category,
                keyboards: item.audios,
                page: 0,
                start: item.start,
                end: item.end
            })
        })
    } catch (error) {
        errorHandler(error, ctx)
    }
})

namazForMenScene.hears("🌥 Bomdod namozi", async (ctx) => {
    try {
        const category = categories.find(item => item.category === "ERKAKLAR_UCHUN_NAMOZ")
        const subCategory = category.items.find(item => item.sub_category === "BOMDOD_NAMOZI")
        const item = subCategory.items[0]

        await ctx.reply(ctx.message?.text, Markup.removeKeyboard())
        await ctx.replyWithPhoto(item.media, {
            caption: item.text,
            parse_mode: 'HTML',
            ...keyboards.backAndNext({
                cursor: subCategory.sub_category,
                keyboards: item.audios,
                page: 0,
                start: item.start,
                end: item.end
            })
        })
    } catch (error) {
        errorHandler(error, ctx)
    }
})

namazForMenScene.hears("☀️ Peshin namozi", async (ctx) => {
    try {
        const category = categories.find(item => item.category === "ERKAKLAR_UCHUN_NAMOZ")
        const subCategory = category.items.find(item => item.sub_category === "PESHIN_NAMOZI")
        const item = subCategory.items[0]

        await ctx.reply(ctx.message?.text, Markup.removeKeyboard())
        await ctx.replyWithPhoto(item.media, {
            caption: item.text,
            parse_mode: 'HTML',
            ...keyboards.backAndNext({
                cursor: subCategory.sub_category,
                keyboards: item.audios,
                page: 0,
                start: item.start,
                end: item.end
            })
        })
    } catch (error) {
        errorHandler(error, ctx)
    }
})

namazForMenScene.hears("⛅️ Asr namozi", async (ctx) => {
    try {
        const category = categories.find(item => item.category === "ERKAKLAR_UCHUN_NAMOZ")
        const subCategory = category.items.find(item => item.sub_category === "ASR_NAMOZI")
        const item = subCategory.items[0]

        await ctx.reply(ctx.message?.text, Markup.removeKeyboard())
        await ctx.replyWithPhoto(item.media, {
            caption: item.text,
            parse_mode: 'HTML',
            ...keyboards.backAndNext({
                cursor: subCategory.sub_category,
                keyboards: item.audios,
                page: 0,
                start: item.start,
                end: item.end
            })
        })
    } catch (error) {
        errorHandler(error, ctx)
    }
})

namazForMenScene.hears("🌤 Shom namozi", async (ctx) => {
    try {
        const category = categories.find(item => item.category === "ERKAKLAR_UCHUN_NAMOZ")
        const subCategory = category.items.find(item => item.sub_category === "SHOM_NAMOZI")
        const item = subCategory.items[0]

        await ctx.reply(ctx.message?.text, Markup.removeKeyboard())
        await ctx.replyWithPhoto(item.media, {
            caption: item.text,
            parse_mode: 'HTML',
            ...keyboards.backAndNext({
                cursor: subCategory.sub_category,
                keyboards: item.audios,
                page: 0,
                start: item.start,
                end: item.end
            })
        })
    } catch (error) {
        errorHandler(error, ctx)
    }
})

namazForMenScene.hears("🌘 Xufton namozi", async (ctx) => {
    try {
        const category = categories.find(item => item.category === "ERKAKLAR_UCHUN_NAMOZ")
        const subCategory = category.items.find(item => item.sub_category === "XUFTON_NAMOZI")
        const item = subCategory.items[0]

        await ctx.reply(ctx.message?.text, Markup.removeKeyboard())
        await ctx.replyWithPhoto(item.media, {
            caption: item.text,
            parse_mode: 'HTML',
            ...keyboards.backAndNext({
                cursor: subCategory.sub_category,
                keyboards: item.audios,
                page: 0,
                start: item.start,
                end: item.end
            })
        })
    } catch (error) {
        errorHandler(error, ctx)
    }
})

namazForMenScene.hears("🌑 Vitr namozi", async (ctx) => {
    try {
        const category = categories.find(item => item.category === "ERKAKLAR_UCHUN_NAMOZ")
        const subCategory = category.items.find(item => item.sub_category === "VITR_NAMOZI")
        const item = subCategory.items[0]

        await ctx.reply(ctx.message?.text, Markup.removeKeyboard())
        await ctx.replyWithPhoto(item.media, {
            caption: item.text,
            parse_mode: 'HTML',
            ...keyboards.backAndNext({
                cursor: subCategory.sub_category,
                keyboards: item.audios,
                page: 0,
                start: item.start,
                end: item.end
            })
        })
    } catch (error) {
        errorHandler(error, ctx)
    }
})

namazForMenScene.hears("🤲 Qazo namozlari", async (ctx) => {
    try {
        const category = categories.find(item => item.category === "ERKAKLAR_UCHUN_NAMOZ")
        const subCategory = category.items.find(item => item.sub_category === "QAZO_NAMOZLARI")

        await ctx.replyWithHTML(subCategory.items[0])
    } catch (error) {
        errorHandler(error, ctx)
    }
})

namazForMenScene.action(async (callbackData, ctx) => {
    try {
        ctx.answerCbQuery()
        const [ cursor ] = callbackData.split(':')

        if (cursor === 'quit_process') {
            ctx.deleteMessage()
            return ctx.scene.enter('namaz_for_men', { cancel: true })
        }
        
        await sendPaginationData(ctx, 'ERKAKLAR_UCHUN_NAMOZ', callbackData)
    } catch (error) {
        errorHandler(error, ctx)
    }
})

namazForMenScene.hears("⬅️ Ortga", async (ctx) => ctx.scene.enter('start'))

module.exports = namazForMenScene