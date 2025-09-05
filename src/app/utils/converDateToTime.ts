export const dateconverted = (time: string, baseDate: Date) => {
  if (!time) return;
  const normalized = time.toLowerCase().replace(/\s/g, '');

  // Try to match 12-hour format (e.g., 5:30pm, 12:00am)
  const match12 = normalized.match(/^(\d{1,2}):(\d{2})(am|pm)$/);
  if (match12) {
    let hours = parseInt(match12[1]);
    const minutes = parseInt(match12[2]);
    const period = match12[3];

    if (period === 'pm' && hours < 12) {
      hours += 12;
    } else if (period === 'am' && hours === 12) {
      hours = 0;
    }
    const date = new Date(baseDate);
    date.setHours(hours, minutes, 0, 0);
    return date;
  }

  // Try to match 24-hour format (e.g., 17:30, 00:00)
  const match24 = normalized.match(/^(\d{1,2}):(\d{2})$/);
  if (match24) {
    const hours = parseInt(match24[1]);
    const minutes = parseInt(match24[2]);

    const date = new Date(baseDate);
    date.setHours(hours, minutes, 0, 0);
    return date;
  }

  throw new Error(`Invalid time format: ${time}`);
};
