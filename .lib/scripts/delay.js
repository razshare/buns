/**
 * Delay by `milliseconds`.
 * @param {number} milliseconds
 * @returns
 */
export function delay(milliseconds) {
  return new Promise(function start(stop) {
    setTimeout(stop, milliseconds)
  })
}
