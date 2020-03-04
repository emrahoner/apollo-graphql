const getNow = () => {
    return {
        now: new Date()
    }
}

const addHoursToNow = (_, { hours }) => {
    let now = (new Date()).getTime()
    now += hours * 3600 * 1000
    return {
        date: new Date(now)
    }
}

module.exports = {
    getNow,
    addHoursToNow
}