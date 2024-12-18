const { Schema, model } = require('mongoose')

// Define a sub-schema for prayer times
const timesSchema = new Schema({
    tong_saharlik: { type: String, required: true },
    quyosh: { type: String, required: true },
    peshin: { type: String, required: true },
    asr: { type: String, required: true },
    shom_iftor: { type: String, required: true },
    hufton: { type: String, required: true }
}, { _id: false, versionKey: false })

const dateSchema = new Schema({
    day: { type: Number, required: true },
    month: { type: String, required: true, trim: true },
    year: { type: Number, required: true },
    weekday: { type: String, required: true, trim: true }
}, { _id: false, versionKey: false })

const prayerTimesSchema = new Schema({
    region: { type: String, required: true },
    city: { type: String, required: true },
    daily: {
        date: dateSchema,
        times: timesSchema
    }
}, { timestamps: true, versionKey: false })

const PrayerTimes = model('PrayerTimes', prayerTimesSchema)

module.exports = PrayerTimes
