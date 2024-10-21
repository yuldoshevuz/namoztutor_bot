require('./index')

const bot = require('./core/bot')

bot.launch(() => {
    console.log('Bot launched')
})