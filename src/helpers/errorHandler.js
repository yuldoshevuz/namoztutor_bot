const { TelegramError } = require('telegraf')
const bot = require('../core/bot')
const environments = require('../config/environments')

const errorHandler = async (error, ctx) => {
    console.error(error)

    const err = error instanceof TelegramError?
        JSON.stringify(error) :
        JSON.stringify(error, Object.getOwnPropertyNames(error))

    const errorMessage = 
        `<b>Xatolik! @${bot.botInfo.username}</b>\n\n`+
        `<pre><code class=language-javascript>${err}</code></pre>`
        
    await bot.telegram.sendMessage(
        environments.ERROR_CHANNEL,
        errorMessage,
        { parse_mode: 'HTML' }
    )
    
    if (ctx) {
        await ctx.reply(
            "Kechirasiz, xatolik yuz berdi. Iltimos keyinroq urinib ko'ring."
        )
    }
}

module.exports = errorHandler