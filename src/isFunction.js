/**
 * Check `value` if is a function
 *
 * @param {any} value - value to evaluate
 * @param {boolean} result evaluation
 * @example
 * isArray(() => {}) // => true
 * isArray('{}') // => false
 * isArray(32) // => false
 */
export const isFunction = (value) => typeof value === 'function'
