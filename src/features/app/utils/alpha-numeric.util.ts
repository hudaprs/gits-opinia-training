/**
 * @description Validation for checking if string is alpha numeric
 *
 * @param {string} value
 *
 * @return {boolean} boolean
 */
export const alphaNumeric = (value: string): boolean => {
  return /^[a-z\d\s]+$/i.test(value);
};
