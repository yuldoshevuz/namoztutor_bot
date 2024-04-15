const User = require('../models/User')
const errorHandler = require('../helpers/errorHandler')
const { ADMINS } = require('../config/environments')

module.exports = async (ctx, next) => {
    try {
        const user = ctx.session.user || await User.findOne({ chat_id: ctx.from.id })
        const admins = ADMINS.find(id => +id === ctx.from.id)

        if (user && user.is_admin || admins) {
            ctx.session.user = user
            return next()
        }
        await ctx.replyWithHTML(`<b>${ctx.from.id}</b>`)
    } catch (error) {
        errorHandler(error, ctx)
    }
}