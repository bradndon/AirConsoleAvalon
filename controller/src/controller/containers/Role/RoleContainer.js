import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {Role} from 'controller/components'
import styled from 'styled-components'
import back from './back.jpg'
import airconsole from 'controller/constants/airconsole'

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: url(${back}) no-repeat;
  background-position: center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`



class RoleContainer extends React.Component {
  render() {
    return (<Container>
      <Role playerRole={this.props.playerRole} otherRoles={["asdf"]}/>
    </Container>)
  }
}

RoleContainer.propTypes = {
  playerRole: PropTypes.string.isRequired,
}

function mapStateToProps(state, props) {
  return {
    playerRole: state.players[airconsole.getDeviceId()].role,
  }
}

export default connect(mapStateToProps)(RoleContainer)
