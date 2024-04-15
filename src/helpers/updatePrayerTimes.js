const { default: axios } = require('axios')
const cron = require('cron')

const errorHandler = require('./errorHandler')
const writePrayerTimes = require('./writePrayerTimes')

const cities = require('../data/cities')

const PrayerTimes = require('../models/PrayerTimes')
const formatApiData = require('./formatApiData')

const updatePrayerTimes = async () => {
    try {
        const prayerTimes = await PrayerTimes.find()

        if (prayerTimes && prayerTimes.length) {
            cities.forEach(async city => {
                const daily = await axios.get(`https://islomapi.uz/api/present/day?region=${city.name}`)
                const weekly = await axios.get(`https://islomapi.uz/api/present/week?region=${city.name}`)
                const monthly = await axios.get(`https://islomapi.uz/api/monthly?region=${city.name}&month=${new Date().getMonth() + 1}`)

                const dailyData = formatApiData(daily.data, 'daily')
                const weeklyDaya = formatApiData(weekly.data, 'weekly')
                const monthlyData = formatApiData(monthly.data, 'monthly')

                await PrayerTimes.findOneAndUpdate({
                    region: city.region, city: city.name
                }, {
                    daily: dailyData,
                    weekly: weeklyDaya,
                    monthly: monthlyData
                })
            })
        } else {
            await writePrayerTimes()
        }
    } catch (error) {
        errorHandler(error)
    }
}

new cron.CronJob('0 1 * * *', updatePrayerTimes, null, true, 'Asia/Tashkent')