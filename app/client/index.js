import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'
import App from './App'
import createChat from './chat'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Marck+Script');
  body {
    margin: 0;
    font-family: Helvetica, sans-serif;
  }
`

ReactDOM.render(<App />, document.querySelector('#root'))

createChat()

if (module.hot) {
  module.hot.accept()
  module.hot.dispose(() => {
    window.location.reload()
  })
}
