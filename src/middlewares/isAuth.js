const User = require('../models/User')
const errorHandler = require('../helpers/errorHandler')

module.exports = async (ctx, next) => {
    try {
        let user = await User.findOne({ chat_id: ctx.from.id })

        if (!user) {
            user = await User.create({ chat_id: ctx.from.id, ...ctx.from })
        }

        if (!user.active && !user.region || !user.city) {
            return ctx.scene.enter('auth')
        }

        if (!user.active) {
            user.active = true
            await user.save()
        }
        
        ctx.session.user = user
        next()
    } catch (error) {
        errorHandler(error, ctx)
    }
}