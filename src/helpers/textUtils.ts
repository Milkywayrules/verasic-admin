/**
 * Capitalize first character of a text
 *
 * @param text text to transform
 * @returns capitalize text on the first char
 */
export const capsFirstLetter = (text: string) => {
  return text
    .split('')
    .map((x, i) => (i === 0 ? x.toUpperCase() : x))
    .join('')
}

/**
 * Capitalize every first character on every word
 *
 * @param text text to transform
 * @returns capitalized text on every first char
 */
export const capsEveryFirstLetter = (text: string) => {
  const w = text
    .split(' ')
    .map(arrOfStr =>
      arrOfStr
        .split('')
        .map((x, i) => (i === 0 ? x.toUpperCase() : x))
        .join(''),
    )
    .join(' ')

  return w
}
