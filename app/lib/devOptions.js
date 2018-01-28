const { isDevelopment } = require('./env')

module.exports = {
  disableTelegram: (() => {
    const disable = isDevelopment && process.env.DISABLE_TELEGRAM === 'true'
    if (disable) console.log('Telegram integration disabled')
    return disable
  })()
}
