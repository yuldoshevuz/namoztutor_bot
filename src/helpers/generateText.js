const day = (prayertimes) => {
    const { daily } = prayertimes
    const { date } = daily
    const { times } = daily

    return `<b>📍 ${prayertimes.city}\n\n`+
        `🗓 Sana: ${date.weekday} ${date.day}-${date.month} ${date.year}-yil \n\n`+

        `🌥 Bomdod: ${times.tong_saharlik}\n`+
        `🌞 Quyosh: ${times.quyosh}\n`+
        `☀️ Peshin: ${times.peshin}\n`+
        `⛅️ Asr: ${times.asr}\n`+
        `🌤 Shom: ${times.shom_iftor}\n`+
        `🌘 Xufton: ${times.hufton}\n\n`+

        `🌅 Saharlik: ${times.tong_saharlik}\n`+
        `🌄 Iftorlik: ${times.shom_iftor}</b>`
}

module.exports = { day }