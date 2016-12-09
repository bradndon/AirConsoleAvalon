import React, { PropTypes } from 'react'
import PlayerCard from '../../components/PlayerCard/PlayerCard'
import LeaderQuestInfo from '../../components/LeaderQuestInfo/LeaderQuestInfo'


class PlayerChooserContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedCount: 0,
      maxSelected: 4,
      players: [
        {name:"Brandon",chosen: false},
        {name:"Isaac",chosen: false},
        {name:"Kirsten",chosen: false},
        {name:"Mitch",chosen: false},
        {name:"Kenzie",chosen: false},
        {name:"Geneva",chosen: false},
        {name:"Dana",chosen: false}]
    }
  }
  handleTap(index, e) {
    e.stopPropagation()
    let players = this.state.players
    let selectedCount = this.state.selectedCount
    players[index].chosen = !players[index].chosen
    if (players[index].chosen) {
      if (selectedCount < this.state.maxSelected) {
        selectedCount++;
      } else {
        players[index].chosen = !players[index].chosen
      }
    } else {
      selectedCount--;
    }
    this.setState({players, selectedCount})
  }
  questReady () {
    console.log("Ready for quest")
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

        {this.state.players.map((player, i)=><PlayerCard
                                    key={i}
                                    name={player.name}
                                    chosen={player.chosen}
                                    handleTap={(e) =>this.handleTap(i, e)}/>)}
        <div style={{clear: "both", paddingTop: "90px"}}></div>
      </div>
    )
  }
}

PlayerChooserContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default PlayerChooserContainer;
