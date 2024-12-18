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
                const prayerTimes = await axios.get(`${environments.API_BASE_URL}/api/present/day?region=${city.name}`)
    
                const dailyData = formatApiData(prayerTimes.data);

                await PrayerTimes.create({
                    region: city.region,
                    city: city.name,
                    daily: dailyData,
                })
            })
        }
    } catch (error) {
        errorHandler(error)
    }
}

module.exports = writePrayerTimes