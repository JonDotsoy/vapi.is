/**
 * Check a `value` if is a sealed object.
 *
 * @param {any} value - value to evaluate
 * @param {boolean} result evaluation
 * @example
 * const obj = {}
 * Object.preventExtensions(obj)
 * isSealed(obj) // => true
 * isSealed({}) // => false
 */
export const isSealed = (value) => Object.isSealed(value)
