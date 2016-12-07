import React from 'react'
import PlayerCard from '../../components/PlayerCard/PlayerCard'

class PlayerChooserContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedCount: 0,
      maxSelected: 4,
      players: [
        {
          name:"Brandon",
          chosen: false
        },
        {
          name:"Isaac",
          chosen: false
        },
        {
          name:"Kirsten",
          chosen: false
        },
        {
          name:"Mitch",
          chosen: false
        },
        {
          name:"Kenzie",
          chosen: false
        },
        {
          name:"Geneva",
          chosen: false
        },
        {
          name:"Dana",
          chosen: false
        },]
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
    console.log(index, e)
  }
  render () {
    return (
      <div>
        <h1>{this.state.selectedCount}</h1>
        {this.state.players.map((player, i)=><PlayerCard
                                    key={i}
                                    name={player.name}
                                    chosen={player.chosen}
                                    handleTap={(e) =>this.handleTap(i, e)}/>)}
      </div>
    )
  }
}

export default PlayerChooserContainer;
