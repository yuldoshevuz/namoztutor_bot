require('./index')

const express = require('express')
const bot = require('./core/bot')
const { SERVER_URL, PORT } = require('./config/environments')

const app = express()

app.use(express.json())

app.use('/namoztutor_bot', bot.webhookCallback('/secret-path'))
bot.telegram.setWebhook(SERVER_URL)

app.get('/namoztutor_bot', (req, res) => {
    res.status(200).json({
        ok: true,
        message: "Bot running"
    })
})

app.use((req, res) => {
    res.status(404).json({
        ok: false,
        message: "Page not found"
    })
})

app.listen(PORT, () => {
    console.log(`Bot launched on port: ${PORT} ${new Date()}`)
})
