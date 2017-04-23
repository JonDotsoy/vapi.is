/**
 * Check a `value` if is a frozen object.
 *
 * @param {any} value - value to evaluate
 * @param {boolean} result evaluation
 * @example
 * const obj = Object.preventExtensions({})
 * isFrozen(obj) // => true
 * isFrozen({}) // => false
 */
export const isFrozen = (value) => Object.isFrozen(value)
