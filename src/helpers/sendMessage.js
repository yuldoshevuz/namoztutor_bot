const bot = require('../core/bot')
const errorHandler = require('./errorHandler')
const User = require('../models/User')

const sendMessage = async (chat_id, message) => {
    try {
        const status = await bot.telegram.sendChatAction(chat_id, 'typing').catch(() => false)

        if (status) {
            bot.telegram.sendMessage(
                chat_id,
                message,
                { parse_mode: 'HTML' }
            )
        } else {
            await User.findOneAndUpdate({ chat_id }, { active: false })
        }

        return status
    } catch (error) {
        errorHandler(error)
    }
}

module.exports = sendMessage