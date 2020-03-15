declare type AnyObject = {
    [key: string]: any;
};
/**
 * Adds comma's to a number
 *
 * @export
 * @param {(string|number)} num the number to commafy
 * @param {object} [{ stripDecimals = false, spacedDecimals = false }={}] the options
 * @returns {string} eg. '1,000,000'
 */
export default function commafy(num: number, { stripDecimals, spacedDecimals, thousands }?: AnyObject): string;
export {};
