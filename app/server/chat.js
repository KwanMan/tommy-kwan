const config = require('config')
const createChatServer = require('console-chat/server')
const createTelegramConnector = require('console-chat/connectors/telegram')

const {
  botToken,
  chatId
} = config.telegram

module.exports = function createChat (server) {
  const telegramConnector = createTelegramConnector(botToken, chatId)
  createChatServer(server, {
    hq: telegramConnector,
    name: 'tommy'
  })
}
