/**
 * Adds comma's to a number
 *
 * @export
 * @param {(string | number)} num the number to commafy
 * @param {{ stripDecimals?: boolean, spacedDecimals?: boolean, thousandsComma?: boolean, K?: boolean }} [options] By default thousandsComma is enabled, if disabled it shows `1000` without comma (but `10,000` with)
 * @returns {string} eg. '1,000,000'
 */
declare function commafy(num: number, options?: {
    stripDecimals?: boolean;
    spacedDecimals?: boolean;
    thousandsComma?: boolean;
    K?: boolean;
}): string;

export { commafy };
