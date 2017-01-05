import React, {PropTypes} from 'react'

const Role = (props) => {
  return (<h1>{props.playerRole}</h1>)
}

Role.propTypes = {
  playerRole: PropTypes.string.isRequired,
}

export default Role
