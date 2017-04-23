/**
 * Check a `value` if is a number
 *
 * @param {any} value - value to evaluate
 * @param {boolean} result evaluation
 * @example
 * isNumber('123') // => false
 * isNumber(123) // => true
 */
export const isNumber = (value) => typeof value === 'number' || value instanceof Number
