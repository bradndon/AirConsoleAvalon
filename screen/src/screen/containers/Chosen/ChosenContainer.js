import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { Chosen } from 'screen/components'
import styled from "styled-components"
import * as voteSelectors from 'redux/modules/votes'

const Overlay = styled.div`
  background-color: rgba(0,0,50,0.6);
  padding: 50px;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  h2 {
    letter-spacing: 1px;
    width:100%;
  }
`

class ChosenContainer extends React.Component {
  render() {
    return (
      <Overlay>
        <Chosen players={this.props.playersOffQuest} text={"Players not going"}/>
        <Chosen players={this.props.playersOnQuest} text={"Players going on quest"}/>
      </Overlay>)
  }
}

ChosenContainer.propTypes = {
  vote: PropTypes.object.isRequired,
}

function mapStateToProps(state, props) {
  return {
    vote: voteSelectors.currentVote(state, props),
    playersOnQuest: voteSelectors.getPlayersOnQuest(state, props),
    playersOffQuest: voteSelectors.getPlayersOffQuest(state, props),
  }
}

export default connect(mapStateToProps)(ChosenContainer)
