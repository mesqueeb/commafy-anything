/**
 * Adds comma's to a number
 *
 * @export
 * @param {(string | number)} num the number to commafy
 * @param {{ stripDecimals?: boolean, spacedDecimals?: boolean, thousandsComma?: boolean }} [options] By default thousandsComma is enabled, if disabled it shows `1000` without comma (but `10,000` with)
 * @returns {string} eg. '1,000,000'
 */
export function commafy (
  num: number,
  options?: { stripDecimals?: boolean, spacedDecimals?: boolean, thousandsComma?: boolean }
): string {
  const { stripDecimals = false, spacedDecimals = false, thousandsComma = true } = options || {}
  const str = num.toString().split('.')
  const minLength = thousandsComma ? 4 : 5
  if (str[0].length >= minLength) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,')
  }
  if (stripDecimals) return str[0]
  if (spacedDecimals && str[1] && str[1].length >= minLength) {
    str[1] = str[1].replace(/(\d{3})/g, '$1 ').trim()
  }
  return str.join('.')
}
