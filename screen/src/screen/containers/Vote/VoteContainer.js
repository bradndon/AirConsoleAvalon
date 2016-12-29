import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import * as voteActionCreators from 'redux/modules/votes'
import { getPlayers } from 'redux/modules/players'

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

class VoteContainer extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.players.length - nextProps.voteCount === 0) {
      console.warn("VOTING IS COMPLETE, TIME TO CALCULATE RESULT")
    }
  }
  render() {
    return (<Overlay><p>{`${this.props.players.length - this.props.voteCount} players left to vote`}</p></Overlay>)
  }
}

VoteContainer.propTypes = {
  voteCount: PropTypes.number.isRequired,
  players: PropTypes.array.isRequired,
}

function mapStateToProps(state, props) {
  return {
    voteCount: voteActionCreators.voteCount(state, props),
    players: getPlayers(state, props),
  }
}

export default connect(mapStateToProps)(VoteContainer)
