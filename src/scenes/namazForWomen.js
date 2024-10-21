const { Scenes, Markup } = require('telegraf')
const errorHandler = require('../helpers/errorHandler')
const keyboards = require('../utils/keyboards')
const categories = require('../data/categories')
const sendPaginationData = require('../helpers/sendPaginationData')

const namazForWomenScene = new Scenes.BaseScene('namaz_for_women')

namazForWomenScene.enter(async (ctx) => {
    try {
        const { cancel } = ctx.scene.state

        if (cancel) {
            ctx.reply('☑️ Bekor qilindi', keyboards.namoz('ayol'))
        } else {
            ctx.reply('🧕 Ayollar uchun namoz', keyboards.namoz('ayol'))
        }
    } catch (error) {
        errorHandler(error, ctx)
    }
})

namazForWomenScene.hears("🙆‍♀️ Ayollarga xos holatlar", async (ctx) => {
    try {
        const category = categories.find(item => item.category === "AYOLLAR_UCHUN_NAMOZ")
        const subCategory = category.items.find(item => item.sub_category === "AYOLLARGA_XOS_HOLATLAR")
        const item = subCategory.items[0]

        await ctx.reply(ctx.message?.text, Markup.removeKeyboard())
        await ctx.replyWithHTML(item.text, keyboards.backAndNext({
            cursor: subCategory.sub_category,
            keyboards: item.audios,
            page: 0,
            start: item.start,
            end: item.end
        }))
    } catch (error) {
        errorHandler(error, ctx)
    }
})

namazForWomenScene.hears("🌥 Bomdod namozi", async (ctx) => {
    try {
        const category = categories.find(item => item.category === "AYOLLAR_UCHUN_NAMOZ")
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

namazForWomenScene.hears("☀️ Peshin namozi", async (ctx) => {
    try {
        const category = categories.find(item => item.category === "AYOLLAR_UCHUN_NAMOZ")
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

namazForWomenScene.hears("⛅️ Asr namozi", async (ctx) => {
    try {
        const category = categories.find(item => item.category === "AYOLLAR_UCHUN_NAMOZ")
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

namazForWomenScene.hears("🌤 Shom namozi", async (ctx) => {
    try {
        const category = categories.find(item => item.category === "AYOLLAR_UCHUN_NAMOZ")
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

namazForWomenScene.hears("🌘 Xufton namozi", async (ctx) => {
    try {
        const category = categories.find(item => item.category === "AYOLLAR_UCHUN_NAMOZ")
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

namazForWomenScene.hears("🌑 Vitr namozi", async (ctx) => {
    try {
        const category = categories.find(item => item.category === "AYOLLAR_UCHUN_NAMOZ")
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

namazForWomenScene.hears("🤲 Qazo namozlari", async (ctx) => {
    try {
        const category = categories.find(item => item.category === "ERKAKLAR_UCHUN_NAMOZ")
        const subCategory = category.items.find(item => item.sub_category === "QAZO_NAMOZLARI")

        await ctx.replyWithHTML(subCategory.items[0])
    } catch (error) {
        errorHandler(error, ctx)
    }
})

namazForWomenScene.action(async (callbackData, ctx) => {
    try {
        ctx.answerCbQuery()
        const [ cursor ] = callbackData.split(':')

        if (cursor === 'quit_process') {
            ctx.deleteMessage()
            return ctx.scene.enter('namaz_for_women', { cancel: true })
        }

        await sendPaginationData(ctx, 'AYOLLAR_UCHUN_NAMOZ', callbackData)
    } catch (error) {
        errorHandler(error, ctx)
    }
})

namazForWomenScene.hears("⬅️ Ortga", async (ctx) => ctx.scene.enter('start'))

module.exports = namazForWomenScene