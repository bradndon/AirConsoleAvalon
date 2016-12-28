import React from 'react'
import "./Main.css"

class MainContainer extends React.Component {
  render () {
    return (
      <div className={"container"}>
        <div className={"navbar"}>
        </div>
        <div className={"innerContainer"}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default MainContainer;
