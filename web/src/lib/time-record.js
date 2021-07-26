class TimeRecord {
  constructor (originData = '00:00:00') {
    this.originData = originData
  }

  parseDate (date, gap = ':') {
    if (typeof date !== 'string') return 0
    let timeArr = date.split(gap)
    let hours = timeArr[0] || 0
    let minutes = timeArr[1] || 0
    let seconds = timeArr[2] || 0
    return parseInt(hours) * 60 * 60 * 1000 + parseInt(minutes) * 60 * 1000 + parseInt(seconds) * 1000
  }
}

export default TimeRecord