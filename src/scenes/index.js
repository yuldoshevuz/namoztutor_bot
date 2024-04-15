const { Scenes } = require('telegraf')

const stage = new Scenes.Stage([
    require('./start'),
    require('./auth'),
    require('./settings'),
    ...require('./admin')
])

module.exports = stage