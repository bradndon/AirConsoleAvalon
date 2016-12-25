import React from 'react'
import { Waiting } from "components"

class MenuContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {players: []};
  }
  render () {
    return (
      <Waiting players={this.state.players}/>
    )
  }
}

export default MenuContainer;
