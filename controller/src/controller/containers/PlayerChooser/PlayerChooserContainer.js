import React, { PropTypes } from 'react'
import {PlayerCard, LeaderQuestInfo} from 'controller/components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as voteActionCreators from 'redux/modules/votes'
import airconsole from 'controller/constants/airconsole'

export class PlayerChooserContainer extends React.Component {
  componentWillMount() {
    // TODO: move to before this component opens
    // airconsole.message(0, voteActionCreators.addVote({}, 2))
  }
  handleTap(index, e) {
    e.stopPropagation()
    if (this.props.playerLimit - this.props.playerCount !== 0 || this.props.vote.players[this.props.players[index].deviceId] === true) {
      airconsole.message(0, voteActionCreators.votePlayer(this.props.players[index].deviceId))
      this.props.votePlayer(this.props.players[index].deviceId)
    }
  }
  questReady () {
    airconsole.message(0, {type: "ROUTE_CHANGE", route: '/vote'})
  }
  render () {
    return airconsole.getDeviceId() === this.props.vote.leader ? (
      <div>
        <LeaderQuestInfo
          numLeft={this.props.playerLimit - this.props.playerCount}
          isReady={this.props.playerLimit - this.props.playerCount !== 0}
          sendReady={()=>this.questReady()}/>

        {this.props.players.map((player, i)=><PlayerCard
          key={i}
          name={player.name}
          chosen={this.props.vote.players[player.deviceId] === true}
          handleTap={(e) =>this.handleTap(i, e)}/>)}
        <div style={{clear: 'both', paddingTop: '90px'}}/>
      </div>
    ) :
      <div>{this.props.players.map(player => player.deviceId === this.props.vote.leader ? player.name : null)} {"is the leader, wait your turn"}</div>
  }
}

PlayerChooserContainer.propTypes = {
  vote: PropTypes.object.isRequired,
  players: PropTypes.array.isRequired,
}

PlayerChooserContainer.contextTypes = {
  router: PropTypes.object.isRequired,
}

export function mapStateToProps(state, props) {
  return {
    players: Object.keys(state.players).map((e)=>typeof state.players[e] === 'object'? state.players[e]:null).filter((e)=>e),
    playerLimit: voteActionCreators.currentLimit(state, props),
    vote: voteActionCreators.currentVote(state, props),
    playerCount: voteActionCreators.getPlayerCount(state, props),
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    ...voteActionCreators,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerChooserContainer)
