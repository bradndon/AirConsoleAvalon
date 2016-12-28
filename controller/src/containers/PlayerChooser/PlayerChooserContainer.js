import React, { PropTypes } from 'react'
import {PlayerCard, LeaderQuestInfo} from 'components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as playerActionCreators from 'redux/modules/players'
import * as voteActionCreators from 'redux/modules/votes'
import airconsole from 'constants/airconsole'

export class PlayerChooserContainer extends React.Component {
  componentWillMount() {
    // TODO: move to before this component opens
    // airconsole.message(0, voteActionCreators.addVote({}, 2))
  }
  handleTap(index, e) {
    e.stopPropagation()
  }
  questReady () {
    console.warn('Ready for quest')
    this.context.router.push('/vote')
  }
  render () {
    console.log(this.props)
    return (
      <div>
        <LeaderQuestInfo
          numLeft={this.props.vote.playerLimit - this.props.playerCount}
          isReady={this.props.vote.playerLimit - this.props.playerCount !== 0}
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

PlayerChooserContainer.propTypes = {
  vote: PropTypes.object.isRequired,
  players: PropTypes.array.isRequired,
}



function mapStateToProps(state, props) {
  return {
    players: Object.keys(state.players).map((e)=>typeof state.players[e] === 'object'? state.players[e]:null).filter((e)=>e),
    vote: voteActionCreators.currentVote(state, props),
    playerCount: voteActionCreators.getPlayerCount(state, props)
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    ...playerActionCreators,
    ...voteActionCreators,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerChooserContainer)
