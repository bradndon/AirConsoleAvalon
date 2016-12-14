import React, { PropTypes } from 'react'
import {PlayerCard, LeaderQuestInfo} from 'components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as playerActionCreators from 'redux/modules/players'
import * as voteActionCreators from 'redux/modules/votes'

class PlayerChooserContainer extends React.Component {
  componentWillMount() {
    // TODO: move to before this component opens
    this.props.addVote({}, 2)
  }
  handleTap(index, e) {
    e.stopPropagation()
    this.props.voteOrUnvotePlayer(this.props.players[index].deviceId)
  }
  questReady () {
    console.warn('Ready for quest')
    this.context.router.push('/vote')
  }
  render () {
    var currentCount = Object.keys(this.props.vote.players)
      .reduce((a,b)=> this.props.vote.players[b] === true ? a+1 : a, 0)
    return (
      <div>
        <LeaderQuestInfo
          numLeft={this.props.vote.playerLimit - currentCount}
          isReady={this.props.vote.playerLimit - currentCount !== 0}
          sendReady={()=>this.questReady()}/>

        {this.props.players.map((player, i)=><PlayerCard
          key={i}
          name={player.name}
          chosen={this.props.vote.players[player.deviceId] === true}
          handleTap={(e) =>this.handleTap(i, e)}/>)}
        <div style={{clear: 'both', paddingTop: '90px'}}/>
      </div>
    )
  }
}

PlayerChooserContainer.contextTypes = {
  router: PropTypes.object.isRequired,
}

function mapStateToProps({players, votes}) {
  return {
    players: Object.keys(players).map((e)=>typeof players[e] === 'object'? players[e]:null).filter((e)=>e),
    vote: votes[votes.length-1],
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    ...playerActionCreators,
    ...voteActionCreators,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerChooserContainer)
