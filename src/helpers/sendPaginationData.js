const categories = require('../data/categories')
const keyboards = require('../utils/keyboards')
const errorHandler = require("./errorHandler")

const audios = require('../data/audios')

module.exports = async (ctx, categoryName, callbackData) => {
    try {
        const [ cursor, page, data ] = callbackData.split(':')
        let current = +page

        const category = categories.find(item => item.category === categoryName)
        const subCategory = category.items.find(item => item.sub_category === cursor)

        if (data === 'back' && (current || current === 0)) {
            current--
        } else if (data === 'next' && (current || current === 0)) {
            current++
        }

        const audio = audios.all.find(item => item.data === data)
        const item = subCategory?.items[ current ]

        if (audio) {
            await ctx.editMessageMedia({
                media: audio.audio,
                type: 'audio',
                caption: audio.caption,
                parse_mode: 'HTML',
            }, {
                ...keyboards.backAndNext({
                    cursor,
                    keyboards: null,
                    page: current + 1,
                    start: false,
                    end: true,
                    hide_quit: true
                })
            })

            return
        }

        if (item) {
            if (item.media) {
                await ctx.editMessageMedia({
                    media: item.media,
                    type: 'photo',
                    caption: item.text,
                    parse_mode: 'HTML'
                }, { ...keyboards.backAndNext({ cursor: subCategory.sub_category, keyboards: item.audios, page: current, start: item.start, end: item.end }) })
            } else {
                await ctx.editMessageText(item.text, {
                    parse_mode: 'HTML',
                    ...keyboards.backAndNext({
                        cursor: subCategory.sub_category,
                        keyboards: item.audios,
                        page: current,
                        start: item.start,
                        end: item.end
                    })
                })
            }
        }
    } catch (error) {
        errorHandler(error, ctx)
    }
}