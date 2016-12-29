import React from 'react'
import {Vote} from 'controller/components'
import { connect } from 'react-redux'
import airconsole from 'controller/constants/airconsole'
import * as voteActionCreators from 'redux/modules/votes'

class VoteContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      isApproving: false,
      hasVoted: false,
    }
  }
  approve() {
    this.setState({isApproving: true})
  }
  reject() {
    this.setState({isApproving: false})
  }
  submitVote() {
    this.setState({hasVoted: true})
    airconsole.message(0, voteActionCreators.setVote(airconsole.getDeviceId(), this.state.isApproving))
  }
  render () {
    return (this.state.hasVoted ? (<h2>{'Thanks for voting! Waiting for others'}</h2>) : (
      <Vote
        names={this.props.players.map((e)=>e.name)}
        isApproving={this.state.isApproving}
        approve={()=>this.approve()}
        reject={()=>this.reject()}
        submitVote={()=>this.submitVote()}/>
      )
    )
  }
}

function mapStateToProps(state, props) {
  return {
    players: voteActionCreators.getPlayersOnQuest(state, props),
  }
}

export default connect(mapStateToProps)(VoteContainer)
