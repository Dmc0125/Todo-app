/* eslint-disable import/prefer-default-export */
/**
 * @typedef limitStringLength
 *
 * @param {String} str - String that should be shortened
 * @param {Number} maxLength - Maximum length of string - default is 20
 * @returns {String} Shortened string
 */
export const limitStringLength = (str, maxLength = 20) => (str.length > maxLength ? str.slice(0, maxLength).trim() + '...' : str);
