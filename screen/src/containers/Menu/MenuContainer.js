import React from 'react'
import { Waiting } from "components"
import { connect } from 'react-redux'
import { getPlayerNames } from 'redux/modules/players'

class MenuContainer extends React.Component {
  render () {
    return (
      <Waiting players={this.props.players}/>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    players: getPlayerNames(state, props)
  }
}

export default connect(mapStateToProps)(MenuContainer)
