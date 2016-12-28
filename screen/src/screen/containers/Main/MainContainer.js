import React from 'react'
import "./Main.css"
import back from './back.jpg'
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: url(${back}) no-repeat;
  background-position: center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`

class MainContainer extends React.Component {
  render () {
    return (
      <div className={"container"}>
        <div className={"navbar"}/>
        <div className={"innerContainer"}>
          <Container>
            {this.props.children}
          </Container>
        </div>
      </div>
    )
  }
}

export default MainContainer
