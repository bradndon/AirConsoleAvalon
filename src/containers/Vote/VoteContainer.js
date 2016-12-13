import React from 'react'
import {Vote} from 'components'

class VoteContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      isApproving: false,
      names: ["Brandon", "Geneva", "Dana", "Isaac"]
    }
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
        names={this.state.names.slice(0, this.state.names.length - 1)}
        lastName={this.state.names.slice(this.state.names.length - 1)[0]}
        isApproving={this.state.isApproving}
        approve={()=>this.approve()}
        reject={()=>this.reject()}/>
    )
  }
}

export default VoteContainer;
