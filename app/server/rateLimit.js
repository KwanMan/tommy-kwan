module.exports = function rateLimit (allowed, timeframe, fn, onExceed) {
  let calls = 0
  return function rateLimited (...params) {
    if (calls >= allowed) return onExceed()
    calls++
    setTimeout(() => { calls-- }, timeframe)
    fn(...params)
  }
}
