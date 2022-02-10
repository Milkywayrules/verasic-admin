export const capsFirstLetter = (text: string) => {
  return text
    .split('')
    .map((x, i) => (i === 0 ? x.toUpperCase() : x))
    .join('')
}

export const capsEveryFirstLetter = (text: string) => {
  console.time('caps')
  const w = text
    .split(' ')
    .map(arrOfStr =>
      arrOfStr
        .split('')
        .map((x, i) => (i === 0 ? x.toUpperCase() : x))
        .join(''),
    )
    .join(' ')
  console.timeEnd('caps')

  return w
}
