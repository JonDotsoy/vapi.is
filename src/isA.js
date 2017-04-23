import {isFunction} from './isFunction'
import {catchResult} from './util/catchResult'

/**
 * Check a `value` if has relation with a `compare` value.
 *
 * @param {any} value  - Value to relate
 * @param {any} relate - Value to be compared.
 *
 * @return {boolean}
 */
export const isA = (value, relate) => (
  (value instanceof relate) ||
  (value === relate) ||
  (isFunction(relate.parse) ? catchResult(relate.parse, value) === value : false) ||
  (catchResult(relate, value) === value)
)
