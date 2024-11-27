const cron = require('cron')
const moment = require('moment')

const User = require('../models/User')
const convertRemindTime = require('./convertRemindTime')
const errorHandler = require('./errorHandler')
const sendMessage = require('./sendMessage')
const PrayerTimes = require('../models/PrayerTimes')

new cron.CronJob('* * * * *', async () => {
    try {
        const users = await User.find({ active: true })
        const now = moment(new Date()).format('HH:mm')

        users.forEach(async (user) => {
						if (user.active && !user.city) {
							  return await User.findOneAndUpdate({ id: user.id }, {
								  active: false
						    })
						}

            const prayertimes = await PrayerTimes.findOne({ region: user.region, city: user.city })						
						const { times } = prayertimes.daily
            const remindTime = user.remind_time

            const bomdod = convertRemindTime(times.tong_saharlik, remindTime)
            const quyosh = convertRemindTime(times.quyosh, remindTime)
            const peshin = convertRemindTime(times.peshin, remindTime)
            const asr = convertRemindTime(times.asr, remindTime)
            const shom = convertRemindTime(times.shom_iftor, remindTime)
            const xufton = convertRemindTime(times.hufton, remindTime)

            if (now === bomdod) {
                sendMessage(
                    user.chat_id,
                    remindTime === 0 ? `<b>🌆 Bomdod ${bomdod} da kirdi</b>`
                    : `<b>Bomdod kirishiga ${remindTime} daqiqa qoldi</b>`
                )
            } else if (now === quyosh && remindTime === 0) {
                sendMessage(
                    user.chat_id,
                    `<b>🌅 Bomdod ${quyosh} da chiqdi</b>`
                )
            } else if (now === peshin) {
                sendMessage(
                    user.chat_id,
                    remindTime === 0 ? `<b>🏙 Peshin ${peshin} da kirdi</b>`
                    : `<b>Peshin kirishiga ${remindTime} daqiqa qoldi</b>`
                )
            } else if (now === asr) {
                sendMessage(
                    user.chat_id,
                    remindTime === 0 ? `<b>🌁 Asr ${asr} da kirdi</b>`
                    : `<b>Asr kirishiga ${remindTime} daqiqa qoldi</b>`
                )
            } else if (now === shom) {
                sendMessage(
                    user.chat_id,
                    remindTime === 0 ? `<b>🌄 Shom ${shom} da kirdi</b>`
                    : `<b>Shom kirishiga ${remindTime} daqiqa qoldi</b>`
                )
            } else if (now === xufton) {
                sendMessage(
                    user.chat_id,
                    remindTime === 0 ? `<b>🌃 Xufton ${xufton} da kirdi</b>`
                    : `<b>Xufton kirishiga ${remindTime} daqiqa qoldi</b>`
                )
            }
        })

    } catch (error) {
        errorHandler(error)
    }
}, null, true, 'Asia/Tashkent')