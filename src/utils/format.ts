export const formatDate = (date: string | number | Date) => {
  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(new Date(date))
}

export const addLeadingZero = (number: number) =>
  number.toString().padStart(2, '0')
