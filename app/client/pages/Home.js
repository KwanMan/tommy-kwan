import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-flexboxgrid2'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      height: 640
    }

    this.onResize = () => this.setState({ height: window.innerHeight })
  }
  componentDidMount () {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.onResize)
  }
  render () {
    const height = Math.max(640, this.state.height)
    return (
      <div className={this.props.className} style={{ height: `${height}px` }}>
        <Container>
          <Row xsAlignX='center'>
            <Col xs={12} md={10} lg={6}>

            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

// <div className='Home-hey'>Hey there, I'm</div>
// <div className='Home-name'>Tommy Kwan</div>
// <div className='Home-tagline'>let me tell you my story...</div>
// <div className='Home-soon'>...soon</div>

export default styled(Home)`
  background-color: #222222;
  color: #ffffff;

  .Home-hey {
    font: italic 26px/1.45 Helvetica;
    text-align: left;
  }

  .Home-name {
    font: 700 64px/1.2 Helvetica;
  }

  .Home-tagline {
    font: normal 32px 'Marck Script', cursive;
    margin-top: 50px;
    text-align: left;
  }

  .Home-soon {
    font: normal 32px 'Marck Script', cursive;
    margin-top: 10px;
    text-align: right;
  }
`
