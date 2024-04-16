const { Scenes } = require('telegraf')
const keyboards = require('../../utils/keyboards')
const errorHandler = require('../../helpers/errorHandler')
const bot = require('../../core/bot')

const User = require('../../models/User')

const adminScene = new Scenes.BaseScene('admin')

adminScene.enter(async (ctx) => {
    await ctx.reply(
        'Admin paneliga xush kelibsiz!',
        keyboards.admin()
    )
})

adminScene.hears('📊 Statistika', async (ctx) => {
    try {
        const totalUsers = await User.find()
        const activeUsers = totalUsers.filter(user => user.active)
        const inactiveUsers = totalUsers.filter(user => !user.active)

        const count = {
            total: totalUsers.length,
            active: activeUsers.length,
            inactive: inactiveUsers.length
        }

        for (const user of activeUsers) {
            const status = await bot.telegram.sendChatAction(user.chat_id, 'typing').catch(() => false)
        
            if (!status) {
                await User.findOneAndUpdate({ chat_id: user.chat_id }, {
                    active: false
                })
                count.inactive++
                count.active--
            }
        }

        await ctx.replyWithHTML(
            `<b>📊 Barcha foydalanuvchilar soni:</b> ${count.total} ta\n\n` +
            `<b>🟢 Aktiv foydalanuvchilar:</b> ${count.active} ta\n\n` +
            `<b>🔴 Aktiv bo'lmagan foydalanuvchilar:</b> ${count.inactive} ta`
        )
    } catch (error) {
        errorHandler(error, ctx)
    }
})

adminScene.hears('📨 Yangi xabar', ctx => ctx.scene.enter('send-message-users:admin'))
adminScene.hears('🆔 Xabar yuborish', ctx => ctx.scene.enter('send-message-user:admin'))
adminScene.hears('⬅️ Chiqish', (ctx) => ctx.scene.enter('start'))
adminScene.on('callback_query', ctx => ctx.answerCbQuery(''))

module.exports = adminScene