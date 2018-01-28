const TelegramBot = require('node-telegram-bot-api')

const { disableTelegram } = require('../lib/devOptions')

const {
  BOT_TOKEN = '547391392:AAHC0Az5jycc5q25-FAELHtVWOn60-7DWbc',
  CHAT_ID = '200029509'
} = process.env

module.exports = function createTelegram (onMessage) {
  const bot = disableTelegram
    ? createMockBot()
    : new TelegramBot(BOT_TOKEN, { polling: true })

  bot.onText(/(.*)/, (msg, match) => {
    onMessage(match[1])
  })

  return {
    emit: (message) => {
      console.log(`Sending to telegram: "${message}"`)
      bot.sendMessage(CHAT_ID, message)
    }
  }
}

function createMockBot () {
  return {
    emit: () => {},
    onText: () => {}
  }
}
