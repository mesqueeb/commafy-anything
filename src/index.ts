/**
 * Adds comma's to a number
 *
 * @export
 * @param {(string | number)} num the number to commafy
 * @param {{ stripDecimals?: boolean, spacedDecimals?: boolean, thousandsComma?: boolean, K?: boolean }} [options] By default thousandsComma is enabled, if disabled it shows `1000` without comma (but `10,000` with)
 * @returns {string} eg. '1,000,000'
 */
export function commafy(
  num: number,
  options?: {
    stripDecimals?: boolean
    spacedDecimals?: boolean
    thousandsComma?: boolean
    K?: boolean
  },
): string {
  const {
    stripDecimals = false,
    spacedDecimals = false,
    thousandsComma = true,
    K = false,
  } = options || {}
  const [wholeNrStr, decimalStr = ''] = num.toString().split('.')
  const str = [wholeNrStr, decimalStr]
  const minLength = thousandsComma ? 4 : 5
  if (!K && wholeNrStr && wholeNrStr.length >= minLength) {
    str[0] = wholeNrStr.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
  }
  if (K && wholeNrStr && wholeNrStr.length > 3) {
    const numInK = Math.round(num / 1000)
    const commafied = numInK.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
    str[0] = commafied + 'K'
  }
  if (stripDecimals || !decimalStr || K) return str[0] ?? ''
  if (spacedDecimals && decimalStr.length >= minLength) {
    str[1] = decimalStr.replace(/(\d{3})/g, '$1 ').trim()
  }
  return str.join('.')
}
