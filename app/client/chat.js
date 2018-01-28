import io from 'socket.io-client'

const commandCss = 'background-color: #eeeeee; border-radius: 3px; padding: 2px 5px; margin-left: 10px;'

export default function createChat () {
  const socket = io()
  socket.on('connect', async () => {
    const savedUsername = lsAvailable() && window.localStorage.getItem('chat-username')
    const { username } = await connectChat(savedUsername)

    console.log(`Connected as ${username}`)
    console.log(``)
    console.log(`Hey there, looks like you found the chatroom!`)
    console.log(`Here's a rundown of how this works:`)
    console.log(`%cu('ricky-rowling')`, commandCss, `- choose a username, let me know who you are`)
    console.log(`%cc('Oh hi Mark!')`, commandCss, `- join in on the convo!`)

    socket.on('chat-message', ({ message }) => {
      console.log(message)
    })

    socket.on('chat-update', ({ message }) => {
      console.log(message)
    })

    window.c = (message) => { socket.emit('chat-message', { message }) }
    window.u = async (username) => {
      try {
        await changeUsername(username)
        console.log(`Cool, you're ${username} from now on`)
      } catch (e) {
        console.error(`I couldn't change your username: ${e.message}`)
      }
    }
  })

  function connectChat (username) {
    return new Promise((resolve) => {
      socket.on('chat-connect-res', once((response) => {
        resolve(response)
      }))
      socket.emit('chat-connect-req', { username })
    })
  }

  function changeUsername (username) {
    return new Promise((resolve, reject) => {
      socket.on('chat-change-username-res', once((response) => {
        if (response.ok) {
          resolve(true)
        } else {
          reject(new Error(response.message))
        }
      }))
      socket.emit('chat-change-username-req', { username })
    })
  }
}

function lsAvailable () {
  try {
    window.localStorage.setItem('test', 'test')
    window.localStorage.removeItem('test')
    return true
  } catch (e) {
    return false
  }
}

function once (fn) {
  let executed = false
  return (...p) => {
    if (executed) return
    executed = true
    return fn(...p)
  }
}
