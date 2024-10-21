const { Markup } = require("telegraf")

exports.home = () => Markup.keyboard([
    [ Markup.button.text("⌚️ Namoz vaqtlari"), Markup.button.text("💦 Poklanish") ],
    [ Markup.button.text("🙆‍♂️ Erkaklar uchun namoz"), Markup.button.text("🧕 Ayollar uchun namoz") ],
    [ Markup.button.text("📜 Qur'ondan suralar") ],
    [ Markup.button.text("👤 Profilim"), Markup.button.text("⚙️ Sozlamalar") ],
    [ Markup.button.text("📋 Bot haqida") ]
]).resize()

exports.settings = () => Markup.keyboard([
    Markup.button.text("🏙 Shaharni o'zgartirish"),
    Markup.button.text("🕰 Eslatma vaqtini o'zgartirish"),
    Markup.button.text("⬅️ Ortga")
]).resize()

exports.admin = () => Markup.keyboard([
    [ Markup.button.text("📊 Statistika"), Markup.button.text("📨 Yangi xabar") ],
    [ Markup.button.text("🆔 Xabar yuborish"), Markup.button.text("⬅️ Chiqish") ]
]).resize()

exports.back = () => Markup.keyboard([
    Markup.button.text("◀️ Ortga")
]).resize()

exports.poklanish = () => Markup.keyboard([
    [ Markup.button.text("💧 Tahorat nima?"), Markup.button.text("💦 Tahorat olish") ],
    [ Markup.button.text("💨 Tahoratni buzadigan hollar") ],
    [ Markup.button.text("🚿 G'usl"), Markup.button.text("✨ Tayammum")],
    [ Markup.button.text("⬅️ Ortga") ]
]).resize()

exports.namoz = (gender) => {
    const keyboards = [
        [ Markup.button.text("🌥 Bomdod namozi"),  Markup.button.text("☀️ Peshin namozi") ],
        [ Markup.button.text("⛅️ Asr namozi"), Markup.button.text("🌤 Shom namozi") ],
        [ Markup.button.text("🌘 Xufton namozi"), Markup.button.text("🌑 Vitr namozi") ],
        [ Markup.button.text("🤲 Qazo namozlari"), Markup.button.text("⬅️ Ortga") ]
    ]

    if (gender === "erkak") {
        keyboards.unshift([ Markup.button.text("🗣 Azon va iqomat") ])
    } else {
        keyboards.unshift([ Markup.button.text("🙆‍♀️ Ayollarga xos holatlar") ])
    }

    return Markup.keyboard(keyboards).resize()
}

exports.surahs = (surahs) => {
    const keyboards = [[]]

    surahs.forEach(surah => {
        const lastItem = keyboards[ keyboards.length - 1 ]

        if (lastItem.length < 2) {
            lastItem.push( Markup.button.text(`🎧 ${surah.text}`) )
        } else {
            keyboards.push( [ Markup.button.text(`🎧 ${surah.text}`) ] )
        }
    })
    keyboards.push( [ Markup.button.text("⬅️ Ortga") ] )

    return Markup.keyboard(keyboards).resize()
}

// Inline keyboards
exports.regions = (regions, auth, region_name) => {
    const keyboards = [[]]

    regions.forEach(item => {
        const lastItem = keyboards[ keyboards.length - 1 ]

        if (lastItem.length < 2) {
            lastItem.push(Markup.button.callback(region_name === item.name && auth? item.name+' ✅' : item.name, `region:${item.name}`))
        } else {
            keyboards.push([ Markup.button.callback(region_name === item.name && auth? item.name+' ✅' : item.name, `region:${item.name}`) ])
        }
    })

    if (auth) {
        keyboards.push([ Markup.button.callback("🚫 Bekor qilish", "cancel") ])
    }

    return Markup.inlineKeyboard(keyboards)
}

exports.cities = (cities, auth, city_name) => {
    const keyboards = [[]]

    cities.forEach(item => {
        const lastItem = keyboards[ keyboards.length - 1 ]

        if (lastItem.length < 2) {
            lastItem.push(Markup.button.callback(city_name === item && auth? item+' ✅' : item, `city:${item}`))
        } else {
            keyboards.push([ Markup.button.callback(city_name === item && auth? item+' ✅' : item, `city:${item}`) ])
        }
    })

    if (auth) {
        keyboards.push(
            [ Markup.button.callback("⬅️ Ortga qaytish", "cities:back") ],
            [ Markup.button.callback("🚫 Bekor qilish", "cancel") ]
        )
    } else {
        keyboards.push([ Markup.button.callback("⬅️ Ortga", "cities:back") ]) 
    }

    return Markup.inlineKeyboard(keyboards)
}

exports.reminder_time = (auth, remind_time) => Markup.inlineKeyboard([
    [ Markup.button.callback(remind_time === 0? "O'z vaqtida ✅" : "O'z vaqtida", `remind_time:0`)],
    [ Markup.button.callback(remind_time === 5? "5 daqiqa ✅" : "5 daqiqa", `remind_time:5`), Markup.button.callback(remind_time === 10? "10 daqiqa ✅" : "10 daqiqa", `remind_time:10`) ],
    [ Markup.button.callback(remind_time === 15? "15 daqiqa ✅" : "15 daqiqa", `remind_time:15`), Markup.button.callback(remind_time === 20? "20 daqiqa ✅" : "20 daqiqa", `remind_time:20`) ],
    [ Markup.button.callback(`${auth ? "🚫 Bekor qilish" : "⬅️ Ortga"}`, auth ? "cancel" : "remind_time:back") ]
])

exports.sendOrCancel = () => Markup.inlineKeyboard([
    Markup.button.callback("🚫 Bekor qilish", "cancel"),
    Markup.button.callback("✅ Yuborish", "send-text")
])

exports.backInline = (cursor) => Markup.inlineKeyboard([
    Markup.button.callback("⬅️ Ortga qaytish", `${cursor}:back`)
])

exports.cancelInline = (cursor) => Markup.inlineKeyboard([
    Markup.button.callback("🚫 Bekor qilish", `${cursor}:cancel`)
])

exports.backAndNext = (options, /*cursor, keyboards, page, start, end*/) => {
    const keyboards = [[]]

    if (options.keyboards) {
        options.keyboards.forEach((keyboard) => {
            const lastItem = keyboards[ keyboards.length - 1 ]

            if (lastItem.length < 2) {
                lastItem.push(Markup.button.callback(keyboard.text, `${options.cursor}:${options.page}:${keyboard.data}`))
            } else {
                keyboards.push([ Markup.button.callback(keyboard.text, `${options.cursor}:${options.page}:${keyboard.data}`) ])
            }
        })
        keyboards.push([])
    }

    const lastItem = keyboards[ keyboards.length - 1 ]

    if (!options.start) {
        lastItem.push(Markup.button.callback("⬅️", `${options.cursor}:${options.page}:back:${Date.now()}`))
    }
    if (!options.end) {
        lastItem.push(Markup.button.callback("➡️", `${options.cursor}:${options.page}:next:${Date.now()}`))
    }

    if (!options.hide_quit) {
        keyboards.push([ Markup.button.callback("🔚 Chiqish", "quit_process") ])
    }
    return Markup.inlineKeyboard(keyboards)
}