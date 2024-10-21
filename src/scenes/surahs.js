const { Scenes } = require('telegraf')
const keyboards = require('../utils/keyboards')
const errorHandler = require('../helpers/errorHandler')
const surahs = require('../data/surahs.json')

const surahsScene = new Scenes.BaseScene('surahs')

surahsScene.enter(async (ctx) => {
    try {
        await ctx.reply(ctx.message?.text, keyboards.surahs(surahs))
    } catch (error) {
        errorHandler(error, ctx)
    }
})

surahsScene.hears(async (text, ctx) => {
    try {
        const surah = surahs.find(item => `🎧 ${item.text}` === text)

        if (surah) {
            await ctx.replyWithAudio(surah.audio_url, {
                caption: `<b>${surah.text}</b>`,
                parse_mode: 'HTML'
            })
        }
    } catch (error) {
        errorHandler(error, ctx)
    }
})

surahsScene.hears("⬅️ Ortga", async (ctx) => ctx.scene.enter('start'))

module.exports = surahsScene