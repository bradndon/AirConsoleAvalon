import React from 'react'
import {Vote} from 'controller/components'
import { connect } from 'react-redux'

class VoteContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      isApproving: false,
      names: ['Brandon', 'Geneva', 'Dana', 'Isaac'],
    }
  }
  componentDidMount() {
    console.warn(this.props)
  }
  approve() {
    this.setState({isApproving: true})
  }
  reject() {
    this.setState({isApproving: false})
  }
  render () {
    return (
      <Vote
        names={this.props.players.map((e)=>e.name).slice(0, this.props.players.length - 1)}
        lastName={this.props.players.map((e)=>e.name).slice(this.props.players.length - 1)[0]}
        isApproving={this.state.isApproving}
        approve={()=>this.approve()}
        reject={()=>this.reject()}/>
    )
  }
}

function mapStateToProps({players, votes}) {
  return {
    players: Object.keys(votes[votes.length-1].players)
                   .map((e)=>votes[votes.length-1].players[e] === true ? players[e]:null)
                   .filter((e)=>e),
    vote: votes[votes.length-1],
  }
}

export default connect(mapStateToProps)(VoteContainer)
