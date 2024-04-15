const User = require('../models/User')
const errorHandler = require('../helpers/errorHandler')

module.exports = async (ctx, next) => {
    try {
        const user = ctx.session.user || await User.findOne({ chat_id: ctx.from.id })

        if (user && user.is_admin) {
            ctx.session.user = user
            return next()
        }
        await ctx.replyWithHTML(`<b>${ctx.from.id}</b>`)
    } catch (error) {
        errorHandler(error, ctx)
    }
}