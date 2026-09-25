/**
 * Adds comma's to a number
 *
 * @param {string | number} num The number to commafy
 * @param {{
 *   stripDecimals?: boolean
 *   spacedDecimals?: boolean
 *   thousandsComma?: boolean
 *   K?: boolean
 * }} [options]
 *   By default thousandsComma is enabled, if disabled it shows `1000` without comma (but `10,000`
 *   with)
 * @returns {string} Eg. '1,000,000'
 * @export
 */
export declare function commafy(num: number, options?: {
    stripDecimals?: boolean;
    spacedDecimals?: boolean;
    thousandsComma?: boolean;
    K?: boolean;
}): string;
