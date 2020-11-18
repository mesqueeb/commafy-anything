/**
 * Adds comma's to a number
 *
 * @export
 * @param {(string | number)} num the number to commafy
 * @param {{ stripDecimals?: boolean, spacedDecimals?: boolean, thousandsComma?: boolean, K?: boolean }} [options] By default thousandsComma is enabled, if disabled it shows `1000` without comma (but `10,000` with)
 * @returns {string} eg. '1,000,000'
 */
function commafy(num, options) {
    var _a = options || {}, _b = _a.stripDecimals, stripDecimals = _b === void 0 ? false : _b, _c = _a.spacedDecimals, spacedDecimals = _c === void 0 ? false : _c, _d = _a.thousandsComma, thousandsComma = _d === void 0 ? true : _d, _e = _a.K, K = _e === void 0 ? false : _e;
    var _f = num.toString().split('.'), wholeNrStr = _f[0], _g = _f[1], decimalStr = _g === void 0 ? '' : _g;
    var str = [wholeNrStr, decimalStr];
    var minLength = thousandsComma ? 4 : 5;
    if (!K && wholeNrStr.length >= minLength) {
        str[0] = wholeNrStr.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (K && wholeNrStr.length > 3) {
        var numInK = Math.round(num / 1000);
        var commafied = numInK.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        str[0] = commafied + 'K';
    }
    if (stripDecimals || !decimalStr || K)
        return str[0];
    if (spacedDecimals && decimalStr.length >= minLength) {
        str[1] = decimalStr.replace(/(\d{3})/g, '$1 ').trim();
    }
    return str.join('.');
}

export { commafy };
