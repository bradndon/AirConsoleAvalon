import React from 'react'
import "./Main.css"
import {Link} from 'react-router'

class MainContainer extends React.Component {
  constructor() {
    super()
    this.state = {menuShown: false}

    this.toggleMenu = this.toggleMenu.bind(this)
  }
  toggleMenu() {
    this.setState({menuShown: !this.state.menuShown})
  }
  render () {
    return (
      <div className={"container"}>
        <div className={"navbar"}>
          <button onClick={this.toggleMenu}>Menu</button>
          <div className={this.state.menuShown ? "navMenu navMenu--shown" : "navMenu"}>
            <ul>
              <li><Link to="/">Waiting Screen</Link></li>
              <li><Link to="/players">Players</Link></li>
            </ul>
          </div>
        </div>
        <div className={"innerContainer"}>
          {this.props.children}
        </div>

      </div>
    )
  }
}

export default MainContainer;
