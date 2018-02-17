import React from 'react'
import { css } from 'emotion'

const createClassName = (height) => {
  return css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${height}px;
  `
}

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      height: window.innerHeight
    }

    this.handleResize = this.handleResize.bind(this)
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  render () {
    return (
      <div className={createClassName(this.state.height)}>
        Tommy Kwan
      </div>
    )
  }

  handleResize () {
    const { height } = this.state
    const newHeight = window.innerHeight
    if (height !== newHeight) {
      this.setState({ height: newHeight })
    }
  }
}
