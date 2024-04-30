const { Scenes } = require("telegraf")
const keyboards = require("../utils/keyboards")
const isAuth = require("../middlewares/isAuth")
const generateText = require("../helpers/generateText")
const errorHandler = require("../helpers/errorHandler")

const PrayerTimes = require("../models/PrayerTimes")

const startScene = new Scenes.BaseScene("start")

startScene.enter(async (ctx) => {
    const { user } = ctx.session
    const prayertimes = await PrayerTimes.findOne({ region: user.region, city: user.city })
    const text = generateText.day(prayertimes)

    await ctx.replyWithHTML(text, keyboards.home())
})

startScene.hears("⌚️ Namoz vaqtlari", async (ctx) => {
    try {
        const { user } = ctx.session
        const prayertimes = await PrayerTimes.findOne({ region: user.region, city: user.city })
        const text = generateText.day(prayertimes)

        await ctx.replyWithHTML(text, keyboards.home())
    } catch (error) {
        errorHandler(error, ctx)
    }
})

startScene.hears("💦 Poklanish", async (ctx) => ctx.scene.enter("cleaning"))

startScene.hears("👤 Profilim", async (ctx) => {
    try {
        const user = ctx.session.user
        const nameFormatter = (text) => text.replace(/</g, "&lt;").replace(/>/g, "&gt;")
        
        const text =
            `<b>👤 To'liq ismingiz:</b> ${ nameFormatter(ctx.from.first_name) } ${ ctx.from.last_name ? nameFormatter(ctx.from.last_name) : '' }\n\n`+
            `<b>🌏 Viloyat:</b> ${user.region}\n\n`+
            `<b>🌏 Shahar/tuman:</b> ${user.city}\n\n`+
            `<b>⌚️ Eslatma vaqti:</b> ${ user.remind_time === 0 ? "O'z vaqtida" : user.remind_time+' daqiqa oldin' }`

        await ctx.replyWithHTML(text, keyboards.home())
    } catch (error) {
        errorHandler(error, ctx)
    }
})

startScene.hears("🙆‍♂️ Erkaklar uchun namoz", async (ctx) => ctx.scene.enter("namaz_for_men"))
startScene.hears("🧕 Ayollar uchun namoz", async (ctx) => ctx.scene.enter("namaz_for_women"))
startScene.hears("📜 Qur'ondan suralar", async (ctx) => ctx.scene.enter("surahs"))

startScene.hears("⚙️ Sozlamalar", (ctx) => ctx.scene.enter("settings"))
startScene.hears("📋 Bot haqida", async (ctx) => {
    try {
        await ctx.replyWithHTML(
            "☪️ Botimiz sizga namoz vaqtlarini aniq vaqtida yuborishdan tortib, tahorat va g'usl kabi muhim masalalar bo'yicha yo'l-yo'riq berib, kundalik ibodatlaringizda sizga yordam beradi. 😊 Bundan tashqari, siz botimiz orqali <b>Qur'on suralarining tinchlantiruvchi qiroatlarini tinglashingiz mumkin. 🎧☺️</b>\n\n"+
            "<b>⚠️ Eslatma:</b> <i>Botdagi ma'lumotlar <b>«Men ham namoz o'qiyman»</b> namoz kitobi hamda http://islom.ziyouz.com saytidan olingan</i>\n\n"+
            "📎 Agar biron bir muammoga duch kelsangiz yoki yaxshilash bo'yicha takliflaringiz bo'lsa, iltimos, adminimizga murojaat qilishdan tortinmang. <b>Sizning fikr-mulohazalaringiz bebahodir</b>, chunki sizning hissangiz bizni yaxshilash va sizga yaxshiroq xizmat ko'rsatishimizda katta yordam beradi. 🙌\n\n"+
            "<i>JazakhAllohu Xayron (Alloh sizni yaxshilik bilan mukofotlasin). 🤲</i>\n\n"+
            "<b>👨‍💻 Admin: @yuldoshev_uz</b>"
        )
    } catch (error) {
        errorHandler(error, ctx)
    }
})

startScene.start(isAuth, (ctx) => ctx.scene.enter("start"))

startScene.on("callback_query", (ctx) => ctx.answerCbQuery())

module.exports = startScene