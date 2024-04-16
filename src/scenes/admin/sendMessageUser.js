const { Scenes } = require('telegraf')
const errorHandler = require('../../helpers/errorHandler')
const keyboards = require('../../utils/keyboards')
const User = require('../../models/User')
const sendMessage = require('../../helpers/sendMessage')

const sendMessageUserScene = new Scenes.WizardScene(
    'send-message-user:admin',
    async (ctx) => {
        try {
            if (ctx.callbackQuery) {
                const { data } = ctx.callbackQuery

                if (data === 'admin:cancel') {
                    await ctx.editMessageReplyMarkup({})
                    await ctx.reply('☑️ Bekor qilindi', keyboards.admin())
                    return ctx.scene.enter('admin', {}, true)
                }
            } else if (ctx.message) {
                const { text } = ctx.message

                if (text) {
                    const user = await User.findOne({
                        $or: [
                            { chat_id: Number.isNaN(+text) ? 0 : +text },
                            { username: text.replace(/@/, '') }
                        ],
                        active: true
                    })

                    if (!user) {
                        await ctx.replyWithHTML(
                            'Kechirasiz, foydalanuvchi topilmadi. Iltimos boshqa ID yoki foydalanuvchi nomini kiriting\n\n<b>Misol uchun: 1933002694 yoki @yuldoshev_uz</b>',
                            keyboards.cancelInline('admin')
                        )
                        return ctx.scene.enter('send-message-user:admin', {}, true)
                    }

                    await ctx.replyWithHTML(
                        '<b>Xabar matnini kiriting!</b>',
                        keyboards.backInline('sending-message')
                    )
                    ctx.session.sendingUser = user
                    return ctx.wizard.next()
                }
            }
        } catch (error) {
            errorHandler(error, ctx)
        }
    },
    async (ctx) => {
        try {
            if (ctx.callbackQuery) {
                const cbData = ctx.callbackQuery.data

                if (cbData === 'sending-message:back') {
                    await ctx.editMessageText(
                        'Xabar yuboriladigan foydalanuvchini ID raqami yoki foydalanuvchi nomini kiriting\n\n<b>Misol uchun: 1933002694 yoki @yuldoshev_uz</b>',
                        { parse_mode: 'HTML', ...keyboards.cancelInline('admin') }
                    )
                    return ctx.wizard.back()
                }
            } else if (ctx.message) {
                const { text } = ctx.message
                if (text) {
                    const msgText = text.replace(/</g, '&lt;').replace(/>/g, '&gt;')
                    const { sendingUser } = ctx.session

                    ctx.session.sendingText = msgText
                    await ctx.replyWithHTML(
                        `🆔 Foydalanuvchi: <b><a href="tg://user?id=${sendingUser.chat_id}">${sendingUser.first_name}</a></b>\n` +
                        `💌 Xabar matni: \n\n${msgText}`,
                        keyboards.sendOrCancel()
                    )
                    return ctx.wizard.next()
                }
            }
        } catch (error) {
            errorHandler(error, ctx)
        }
    },
    async (ctx) => {
        try {
            if (ctx.callbackQuery) {
                const cbData = ctx.callbackQuery.data

                if (cbData === 'send-text') {
                    await ctx.editMessageReplyMarkup({})

                    const { sendingUser, sendingText } = ctx.session
                    const sendedMessage = await sendMessage(sendingUser.chat_id, sendingText)

                    if (sendedMessage) {
                        await ctx.replyWithHTML(
                            `Xabar <b><a href="tg://user?id=${sendingUser.chat_id}">${sendingUser.first_name}</a></b> ga muvaffaqiyatli yuborildi ✅`,
                            keyboards.admin()
                        )
                    } else {
                        await ctx.replyWithHTML(
                            `Xabar <b><a href="tg://user?id=${sendingUser.chat_id}">${sendingUser.first_name}</a></b> ga yuborilmadi. ❌ Ehtimol <a href="tg://user?id=${sendingUser.chat_id}">${sendingUser.first_name}</a> botni bloklagan`,
                            keyboards.admin()
                        )
                    }
                    
                    ctx.scene.enter('admin', {}, true)
                } else if (cbData === 'cancel') {
                    await ctx.editMessageReplyMarkup({})
                    await ctx.reply('☑️ Bekor qilindi', keyboards.admin())

                    ctx.scene.enter('admin', {}, true)
                }
                delete ctx.session.sendingUser
                delete ctx.session.sendingText
            }
        } catch (error) {
            errorHandler(error, ctx)
        }
    }
)

sendMessageUserScene.enter(async (ctx) => {
    try {
        await ctx.reply(
            '🆔 Xabar yuborish',
            { reply_markup: { remove_keyboard: true } }
        )
        await ctx.replyWithHTML(
            "Xabar yuboriladigan foydalanuvchini ID raqami yoki foydalanuvchi nomini kiriting\n\n<b>Misol uchun: 1933002694 yoki @yuldoshev_uz</b>",
            keyboards.cancelInline('admin')
        )
    } catch (error) {
        errorHandler(error, ctx)
    }
})

sendMessageUserScene.hears('◀️ Ortga', ctx => ctx.scene.enter('admin'))

module.exports = sendMessageUserScene