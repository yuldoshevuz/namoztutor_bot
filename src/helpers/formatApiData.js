const formatApiData = (data, format) => {
    const months = [
        'yanvar', 'fevral', 'mart',
        'aprel', 'may', 'iyun',
        'iyul', 'avgust', 'sentyabr',
        'oktyabr', 'noyabr', 'dekabr'
    ]
    let result;

    if (format === 'daily') {
        const [ year, month, day ] = data.date.split('-')
        const { weekday } = data
        result = {
            date: {
                day: +day,
                month: months[ +month - 1 ],
                year: +year,
                weekday
            },
            times: data.times
        }
    } else if (format === 'weekly') {
        result = data.map(item => {
            const [ day, month, other ] = item.date.split('/')
            const [ year ] = other.split(',')
            const { weekday } = item

            return {
                date: {
                    day: +day,
                    month: months[ +month - 1 ],
                    year: +year,
                    weekday
                },
                times: item.times
            }
        })
    } else if (format === 'monthly') {
        result = data.map(item => {
            const [ year, month, other ] = item.date.split('-')
            const [ day ] = other.split('T')
            const { weekday } = item

            return {
                date: {
                    day: +day,
                    month: months[ +month - 1 ],
                    year: +year,
                    weekday
                },
                times: item.times
            }
        })
    }

    return result
}

module.exports = formatApiData