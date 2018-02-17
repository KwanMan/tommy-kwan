const path = require('path')
const express = require('express')
const config = require('config')
const http = require('http')

const createChat = require('./chat')
const dev = require('./dev')

const app = express()
const server = http.Server(app)

createChat(server)

dev(app)
app.use('/assets', express.static(path.resolve(__dirname, '../assets')))
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../assets/index.html'))
})

server.listen(config.port, () => {
  console.log('started')
})
