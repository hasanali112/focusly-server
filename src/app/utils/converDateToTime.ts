export const dateconverted = (time: string, baseDate: Date) => {
  if (!time) return
  const normalized = time.toLowerCase().replace(/\s/g, '')

  const match = normalized.match(/^(\d{1,2}):(\d{2})(am|pm)$/)
  if (!match) throw new Error(`Invalid time format: ${time}`)

  let hours = parseInt(match[1])
  let minutes = parseInt(match[2])
  let period = match[3]

  if (period === 'pm' && hours < 12) {
    hours += 12
  } else if (period === 'am' && hours === 12) {
    hours = 0
  }

  const date = new Date(baseDate)

  date.setHours(hours, minutes, 0, 0)
  return date
}
