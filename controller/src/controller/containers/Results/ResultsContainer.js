import React, { PropTypes } from 'react'
import { Button } from 'controller/elements'
import { connect } from 'react-redux'
import * as voteActionCreators from 'redux/modules/votes'
import { getPlayers } from 'redux/modules/players'
import airconsole from 'controller/constants/airconsole'

export class ResultsContainer extends React.Component {
  newVote() {
    let leader = this.props.vote.leader
    let nextLeaderIndex = -1
    this.props.players.map((e, i)=>e.deviceId === leader ? nextLeaderIndex = i+1 : null)
    if (nextLeaderIndex > this.props.players.length - 1) nextLeaderIndex = 0
    airconsole.message(0, voteActionCreators.addVote(1, this.props.players[nextLeaderIndex].deviceId))
  }
  render () {
    return (<div><Button onClick={()=>this.newVote()} text={'New Vote'}/></div>)
  }
}

ResultsContainer.propTypes = {
  vote: PropTypes.object.isRequired,
  players: PropTypes.array.isRequired,
}

export function mapStateToProps(state, props) {
  return {
    players: getPlayers(state, props),
    vote: voteActionCreators.currentVote(state, props),
  }
}

export default connect(mapStateToProps)(ResultsContainer)
