
const createIO = require('socket.io')
const createTelegram = require('./telegram')
const rateLimit = require('./rateLimit')

module.exports = function createChat (server) {
  const io = createIO(server)
  const telegram = createTelegram((message) => {
    io.sockets.emit('chat-message', { message: `Tommy says: ${message}` })
  })

  io.on('connection', (socket) => {
    let username = generateUsername()

    socket.on('chat-connect-req', (req = {}) => {
      if (req.username) username = req.username
      socket.emit('chat-connect-res', { username })
      socket.broadcast.emit('chat-update', { message: `${username} has entered the building.` })
    })

    const onChatMessage = ({ message }) => {
      const fullMessage = `${username} says: ${message}`
      socket.emit('chat-message', { message: fullMessage })
      socket.broadcast.emit('chat-message', { message: fullMessage })
      telegram.emit(`${username}: ${message}`)
    }

    socket.on('chat-message', rateLimit(10, 1000, onChatMessage, () => {
      socket.emit('chat-update', { message: 'Sorry, you can only send 10 messages per second' })
    }))

    socket.on('chat-change-username-req', (req = {}) => {
      const oldUsername = username
      username = req.username
      socket.emit('chat-change-username-res', { ok: true })
      socket.broadcast.emit('chat-update', { message: `${oldUsername} is now known as ${username}` })
    })

    socket.on('disconnect', () => {
      const message = `${username} left us :(`
      socket.broadcast.emit('chat-update', { message })
      // telegram.emit(message)
    })
  })
}

const names = [
  'anon'
]
function generateUsername () {
  const idx = Math.floor(Math.random() * names.length)
  const num = Math.floor(Math.random() * 1000)
  return `${names[idx]}-${num}`
}
