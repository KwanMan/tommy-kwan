import React from 'react'
import classnames from 'classnames'

import './ProjectsPage.css'

export default function ProjectsPage (props) {
  return (
    <div className={classnames('ProjectsPage', props.className)}>
      <Project title='react-flexboxgrid2' />
      <Project title='tetris' />
      <Project title='little-atom' />
      <Project title='preact-tiny-atom' />
      <Project title='tommy-kwan' />
    </div>
  )
}

function Project ({ title }) {
  return (
    <div className='Project'>
      <a className='Project-link' href={`https://www.github.com/kwanman/${title}`}>{title}</a>
    </div>
  )
}
