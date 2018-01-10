import React from 'react'
import classnames from 'classnames'

import './HomePage.css'

export default function HomePage (props) {
  return (
    <div className={classnames('HomePage', props.className)}>
      <div className='HomePage-hey'>Hey there, I'm</div>
      <div className='HomePage-name'>Tommy Kwan</div>
      <div className='HomePage-tagline'>let me tell you my story...</div>
      <div className='HomePage-soon' onClick={props.onNext}>...soon</div>
    </div>
  )
}
