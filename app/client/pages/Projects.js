import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexboxgrid2'

export default function Projects (props) {
  return [
    'react-flexboxgrid2',
    'tetris',
    'little-atom',
    'preact-tiny-atom',
    'tommy-kwan'
  ].map(title => (
    <Row xsAlignX='center' key={`project-${title}`}>
      <Col xs={12}>
        <Project href={`https://www.github.com/KwanMan/${title}`}>{title}</Project>
      </Col>
    </Row>
  ))
}

const Project = styled.a`
  width: 200px;
  height: 200px;
  border-radius: 3px;
  margin: 10px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(256, 256, 256, 0.1);
  }
`
