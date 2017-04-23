/**
 * Check `value` if is a Array
 *
 * @param {any} value - value to evaluate
 * @param {boolean} result evaluation
 * @example
 * isArray([]) // => true
 * isArray('[]') // => false
 */
export const isArray = (value) => Array.isArray(value)
