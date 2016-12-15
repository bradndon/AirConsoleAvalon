import React, { PropTypes } from 'react'
import {JoinGame, Waiting} from 'components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as playerActionCreators from 'redux/modules/players'
import './MenuContainer.css'


class MenuContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({value: event.target.value})
  }
  handleSubmit(event) {
    this.props.addPlayer(this.state.value, this.props.numPlayers + 1)
    event.preventDefault()
  }
  render () {
    return (this.props.hasJoined ?
      <div className='menuContainer'>
        <Waiting name={this.state.value}/>
      </div>
      : <div className='menuContainer'>
        <JoinGame handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
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
