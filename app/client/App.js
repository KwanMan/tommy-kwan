import React from 'react'
import { Container } from 'react-flexboxgrid2'

import Home from './pages/Home'
import Projects from './pages/Projects'

export default function App () {
  return (
    <div>

      <Container>
        <Projects />
      </Container>
    </div>
  )
}
