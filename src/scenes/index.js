const { Scenes } = require('telegraf')

const stage = new Scenes.Stage([
    require('./start'),
    require('./auth'),
    require('./settings'),
    require('./cleaning'),
    require('./namazForMen'),
    require('./namazForWomen'),
    require('./surahs'),
    ...require('./admin')
])

module.exports = stage