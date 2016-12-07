import React from 'react'
import Waiting from "../../components/Waiting/Waiting"
import JoinGame from "../../components/JoinGame/JoinGame"

import "./MenuContainer.css"


class MenuContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', hasJoined: false};

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({value: event.target.value})
  }
  handleSubmit(event) {
    this.setState({hasJoined: true})
    event.preventDefault();
  }
  render () {
    return ( this.state.hasJoined ?
      <div className="menuContainer">
        <Waiting name={this.state.value}/>
      </div>
      : <div className="menuContainer">
          <JoinGame handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    name={this.state.value}/>
      </div>
    )
  }
}

export default MenuContainer;
