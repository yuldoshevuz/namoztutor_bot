const { default: axios } = require('axios')
const cron = require('cron')

const errorHandler = require('./errorHandler')
const writePrayerTimes = require('./writePrayerTimes')

const cities = require('../data/cities')

const PrayerTimes = require('../models/PrayerTimes')
const formatApiData = require('./formatApiData')
const environments = require('../config/environments')

writePrayerTimes()

const updatePrayerTimes = async () => {


  console.log("Prayer times update started")

    try {
        const prayerTimes = await PrayerTimes.find()

        if (prayerTimes && prayerTimes.length) {
            cities.forEach(async city => {
                const newPrayerTimes = await axios.get(`${environments.API_BASE_URL}/api/present/day?region=${city.name}`)

                const dailyData = formatApiData(newPrayerTimes.data)

                await PrayerTimes.findOneAndUpdate({ city: city.name }, { daily: dailyData })
            })
            console.log("Updated prayer times")
        } else {
            await writePrayerTimes()
        }
    } catch (error) {
        errorHandler(error)
    }
}

new cron.CronJob('5 0 * * *', updatePrayerTimes, null, true, 'Asia/Tashkent')
