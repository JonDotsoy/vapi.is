/**
 * Check a `value` if is a String
 *
 * @param {any} value - value to evaluate
 * @param {boolean} result evaluation
 * @example
 * isString('a string') // => true
 * isString(12) // => false
 */
export const isString = (value) => typeof value === 'string' || value instanceof String
