const { default: axios } = require('axios')
const errorHandler = require('./errorHandler')

const PrayerTimes = require('../models/PrayerTimes')

const cities = require('../data/cities')
const formatApiData = require('./formatApiData')
const environments = require('../config/environments')

const writePrayerTimes = async () => {
    try {
        const prayerTimes = await PrayerTimes.find()

        if (!prayerTimes || !prayerTimes.length) {
            cities.forEach(async city => {
                const date = new Date()

                const daily = await axios.get(`${environments.API_BASE_URL}/api/present/day?region=${city.name}`)
                const weekly = await axios.get(`${environments.API_BASE_URL}/api/present/week?region=${city.name}`)
                const monthly = await axios.get(`${environments.API_BASE_URL}/api/monthly?region=${city.name}&month=${date.getMonth() + 1}`)
    
                const dailyData = formatApiData(daily.data, 'daily')
                const weeklyData = formatApiData(weekly.data, 'weekly')
                const monthlyData = formatApiData(monthly.data, 'monthly')

                await PrayerTimes.create({
                    region: city.region,
                    city: city.name,
                    daily: dailyData,
                    weekly: weeklyData,
                    monthly: monthlyData
                })
            })
        }
    } catch (error) {
        errorHandler(error)
    }
}

module.exports = writePrayerTimes