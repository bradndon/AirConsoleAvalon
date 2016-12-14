import React, { PropTypes } from 'react'
import {PlayerCard, LeaderQuestInfo} from 'components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as playerActionCreators from 'redux/modules/players'


class PlayerChooserContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedCount: 0,
      maxSelected: 4,
    }
  }
  componentDidMount() {
    console.warn(this.props)
  }
  handleTap(index, e) {
    e.stopPropagation()
    this.props.choosePlayer(this.props.players[index].deviceId)

    // let selectedCount = this.state.selectedCount
    // if (players[index].chosen) {
    //   if (selectedCount < this.state.maxSelected) {
    //     selectedCount++;
    //   } else {
    //     players[index].chosen = !players[index].chosen
    //   }
    // } else {
    //   selectedCount--;
    // }
    // this.setState({players, selectedCount})
  }
  questReady () {
    console.warn('Ready for quest')
    this.context.router.push('/vote')
  }
  render () {
    let numLeft = this.state.maxSelected - this.state.selectedCount
    return (
      <div>
        <LeaderQuestInfo
          numLeft={numLeft}
          isReady={numLeft !== 0}
          sendReady={()=>this.questReady()}/>

        {this.props.players.map((player, i)=><PlayerCard
          key={i}
          name={player.name}
          chosen={player.chosen}
          handleTap={(e) =>this.handleTap(i, e)}/>)}
        <div style={{clear: 'both', paddingTop: '90px'}}/>
      </div>
    )
  }
}

PlayerChooserContainer.contextTypes = {
  router: PropTypes.object.isRequired,
}

function mapStateToProps({players}) {
  return {
    players: Object.keys(players).map((e)=>typeof players[e] === 'object'? players[e]:null).filter((e)=>e),
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(playerActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerChooserContainer)
