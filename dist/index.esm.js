/**
 * Adds comma's to a number
 *
 * @export
 * @param {(string|number)} num the number to commafy
 * @param {object} [{ stripDecimals = false, spacedDecimals = false }={}] the options
 * @returns {string} eg. '1,000,000'
 */
function commafy(num, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.stripDecimals, stripDecimals = _c === void 0 ? false : _c, _d = _b.spacedDecimals, spacedDecimals = _d === void 0 ? false : _d, _e = _b.thousands, thousands = _e === void 0 ? false : _e;
    var str = num.toString().split('.');
    var minLength = thousands ? 4 : 5;
    if (str[0].length >= minLength) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (stripDecimals)
        return str[0];
    if (spacedDecimals && str[1] && str[1].length >= minLength) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ').trim();
    }
    return str.join('.');
}

export default commafy;
