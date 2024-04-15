require('./index')

const express = require('express')
const bot = require('./core/bot')
const { SERVER_URL, PORT } = require('./config/environments')

const app = express()

app.use(express.json())

app.use(bot.webhookCallback('/secret-path'))
bot.telegram.setWebhook(SERVER_URL)

app.listen(PORT, () => {
    console.log(`Bot launched on port: ${PORT}`)
})