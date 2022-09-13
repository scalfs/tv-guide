export const formatDate = (date: string | number | Date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export const addLeadingZero = (number: number) =>
  number.toString().padStart(2, '0')
