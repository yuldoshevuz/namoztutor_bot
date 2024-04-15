module.exports = (time, remindTime) => {
    if (remindTime === 0) return time

    const [ hourStr, minuteStr ] = time.split(':')
    let hour = parseInt(hourStr)
    let minute = parseInt(minuteStr) - remindTime

    if (minute < 0) {
        hour -= 1
        minute += 60
    }

    hour = (hour + 24) % 24
    
    const formattedHour = String(hour).padStart(2, '0')
    const formattedMinute = String(minute).padStart(2, '0')

    return `${formattedHour}:${formattedMinute}`
}