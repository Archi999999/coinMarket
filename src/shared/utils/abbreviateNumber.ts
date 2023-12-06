export function abbreviateNumber(value: null | number | string) {
  if (!value) {
    return '--'
  }
  const number = +value

  if (Math.abs(number) >= 1e9) {
    // Если число больше или равно миллиарду
    return (number / 1e9).toFixed(2) + 'b'
  } else if (Math.abs(number) >= 1e6) {
    // Если число больше или равно миллиону
    return (number / 1e6).toFixed(2) + 'm'
  } else if (Math.abs(number) >= 1e3) {
    // Если число больше или равно тысяче
    return (number / 1e3).toFixed(2) + 'k'
  } else {
    return number.toFixed(2)
  }
}
