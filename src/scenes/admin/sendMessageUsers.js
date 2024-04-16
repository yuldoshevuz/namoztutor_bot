const { Scenes } = require('telegraf')
const errorHandler = require('../../helpers/errorHandler')
const keyboards = require('../../utils/keyboards')
const bot = require('../../core/bot')
const User = require('../../models/User')
const sendMessage = require('../../helpers/sendMessage')

const sendMessageUsersScene = new Scenes.BaseScene('send-message-users:admin')

sendMessageUsersScene.enter(async (ctx) => {
    try {
        await ctx.replyWithHTML(
            '<b>Xabar matnini kiriting!</b>',
            keyboards.back()
        )
    } catch (error) {
        errorHandler(error, ctx)
    }
})

sendMessageUsersScene.hears('◀️ Ortga', ctx => ctx.scene.enter('admin'))

sendMessageUsersScene.hears(async (text, ctx) => {
    try {
        if (!ctx.session.textMsg) {
            await ctx.reply(
                `Xabar matni: \n\n${text}`,
                keyboards.sendOrCancel()
            )
            ctx.session.textMsg = text
        } else {
            ctx.deleteMessage()
        }
    } catch (error) {
        errorHandler(error, ctx)
    }
})

sendMessageUsersScene.action( async (data, ctx) => {
    try {
        ctx.answerCbQuery('')
        const { textMsg } = ctx.session

        if (textMsg) {
            if (data === 'send-text') {
                const totalUsers = await User.find()
                const activeUsers = totalUsers.filter(user => user.active)
                const inactiveUsers = totalUsers.filter(user => !user.active)

                const count = {
                    active: activeUsers.length,
                    inactive: inactiveUsers.length
                }

                for (const user of activeUsers) {
                    const sendedMessage = await sendMessage(user.chat_id, textMsg)

                    if (!sendedMessage) {
                        count.inactive++
                        count.active--
                    }
                }

                const text =
                    `Xabar <b>${count.active}</b> ta foydalanuvchiga muvaffaqiyatli yuborildi. ✅ `+
                    `${ count.inactive? `<b>${count.inactive}</b> ta foydalanuvchiga yuborilmadi, ❌ chunki ular botni bloklagan yoki to'liq ro'yxatdan o'tmagan` :'' }`
                
                await ctx.editMessageReplyMarkup({})
                await ctx.replyWithHTML(
                    text,
                    keyboards.admin()
                )
            } else if (data === 'cancel') {
                await ctx.editMessageReplyMarkup({})
                await ctx.reply(
                    '☑️ Bekor qilindi',
                    keyboards.admin()
                )
            }
            
            delete ctx.session.textMsg
            ctx.scene.enter('admin', {}, true)
        }
    } catch (error) {
        errorHandler(error, ctx)
    }
})

module.exports = sendMessageUsersScene