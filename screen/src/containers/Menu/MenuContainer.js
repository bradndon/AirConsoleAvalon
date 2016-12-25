import React from 'react'
import { Waiting } from "components"

import "./MenuContainer.css"
var globalVar = {}
setTimeout(()=>globalVar.callback(), 5000)
class MenuContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {players: []};
  }
  componentWillMount() {
    globalVar.callback = (data) => {
      this.setState({players: ["ASDFASD"]})
    }
  }
  render () {
    return (
      <Waiting players={this.state.players}/>
    )
  }
}

export default MenuContainer;
