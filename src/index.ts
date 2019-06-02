type AnyObject = {[key: string]: any}
/**
 * Adds comma's to a number
 *
 * @export
 * @param {(string|number)} num the number to commafy
 * @param {object} [{ stripDecimals = false, spacedDecimals = false }={}] the options
 * @returns {string} eg. '1,000,000'
 */
export default function commafy (
  num: number,
  {
    stripDecimals = false,
    spacedDecimals = false,
    thousands = false,
  }: AnyObject = {}
): string {
  const str = num.toString().split('.')
  const minLength = thousands ? 4 : 5
  if (str[0].length >= minLength) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,')
  }
  if (stripDecimals) return str[0]
  if (spacedDecimals && str[1] && str[1].length >= minLength) {
    str[1] = str[1].replace(/(\d{3})/g, '$1 ').trim()
  }
  return str.join('.')
}
