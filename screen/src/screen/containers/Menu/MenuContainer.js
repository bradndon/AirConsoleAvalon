import React from 'react'
import { Waiting } from "screen/components"
import { connect } from 'react-redux'
import { getPlayerNames } from 'redux/modules/players'

export class MenuContainer extends React.Component {
  render () {
    return (
      <Waiting players={this.props.players}/>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    players: getPlayerNames(state, props),
  }
}

export default connect(mapStateToProps)(MenuContainer)
