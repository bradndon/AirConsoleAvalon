import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { hasSucceeded } from 'redux/modules/votes'

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

class ResultsContainer extends React.Component {
  render() {
    const result = this.props.hasSucceeded ? "Success!" : "Failure"
    return (
      <Overlay>
        <h2>{result}</h2>
      </Overlay>)
  }
}

ResultsContainer.propTypes = {
  hasSucceeded: PropTypes.bool.isRequired,
}

function mapStateToProps(state, props) {
  return {
    hasSucceeded: hasSucceeded(state, props),
  }
}

export default connect(mapStateToProps)(ResultsContainer)
