import React from 'react'
import classnames from 'classnames'
import Background from './Background'
import HomePage from './HomePage'
import ProjectsPage from './ProjectsPage'

import './App.css'

const pages = [
  HomePage,
  ProjectsPage
]

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: 0
    }
  }

  render () {
    return (
      <div className='App'>
        <Background />
        {pages.map((Page, i) => {
          const className = classnames('Page', {
            'is-active': i === this.state.active
          })
          return <Page key={i} className={className} onNext={() => this.setState({ active: i + 1 })} />
        })}
      </div>
    )
  }
}
