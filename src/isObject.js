/**
 * Check `value` if is a Object
 *
 * @param {any} value - value to evaluate
 * @param {boolean} result evaluation
 * @example
 * isArray({}) // => true
 * isArray(() => {}) // => true
 * isArray('{}') // => false
 * isArray(32) // => false
 */
export const isObject = (value) => Object(value) === value
