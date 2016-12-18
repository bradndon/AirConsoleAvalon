import React, { PropTypes } from 'react'
import {JoinGame, Waiting} from 'components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as playerActionCreators from 'redux/modules/players'
import './MenuContainer.css'
import airconsole from 'constants/airconsole'
import AirConsole from 'airconsole/airconsole-1.6.0.js'


class MenuContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
  }
  componentDidMount() {
    airconsole.onReady(function() {
      console.warn("ADFA")
      airconsole.message(AirConsole.SCREEN, "Hello!")
    })
  }
  handleChange(event) {
    this.setState({value: event.target.value})
  }
  handleSubmit(event) {
    this.props.addPlayer(this.state.value, this.props.numPlayers + 1)
    event.preventDefault()
  }

  startGame() {
    console.warn("startGame")
  }
  render () {
    return (this.props.hasJoined ?
      (<div className='menuContainer'>
        <Waiting name={this.state.value}
          gameReady={this.props.numPlayers >= 5}
          startGame={()=>this.startGame()}/>
      </div>)
      : <div className='menuContainer'>
        <JoinGame handleSubmit={(e)=>this.handleSubmit(e)}
          handleChange={(e)=>this.handleChange(e)}
          name={this.state.value}/>
      </div>
    )
  }
}

MenuContainer.propTypes = {
  hasJoined: PropTypes.bool.isRequired,
}

function mapStateToProps ({players}) {
  return {
    hasJoined: players.hasJoined,
    numPlayers: Object.keys(players).map((e)=>typeof players[e] === 'object'? players[e]:null).filter((e)=>e).length,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(playerActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer)
