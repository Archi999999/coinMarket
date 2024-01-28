export function abbreviateNumber(value: null | number | string) {
  if (!value) {
    return '--'
  }
  const number = +value

  return new Intl.NumberFormat('en', {
    maximumFractionDigits: 3,
    minimumFractionDigits: 2,
    notation: 'compact',
  }).format(number)
}
