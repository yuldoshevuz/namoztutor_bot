const User = require('../models/User')
const errorHandler = require('../helpers/errorHandler')

module.exports = async (ctx, next) => {
    try {
        let user = await User.findOne({ chat_id: ctx.from.id })

        if (!user) {
            const nameFormatter = (text) => {
                if (text) {
                    return text.replace(/</g, '&lt;').replace(/>/g, '&gt;')
                }
                return null
            }
            const { first_name, last_name, username } = ctx.from

            user = await User.create({
                chat_id: ctx.from.id,
                first_name: nameFormatter(first_name),
                last_name: nameFormatter(last_name),
                username: username
            })
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