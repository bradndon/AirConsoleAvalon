import React, { PropTypes } from 'react'
import './PlayerCard.css'

const PlayerCard = ({name, chosen, handleTap}) => {
  return (
    <div className='playerCard'>
      <div onClick={handleTap} className={chosen ? 'selected' : ''}>
        <h3>{name}</h3>
        {/* <p>{'0Q, 0S, 0L'}</p> */}
      </div>
    </div>
  )
}

PlayerCard.propTypes = {
  name: PropTypes.string.isRequired,
  chosen: PropTypes.bool.isRequired,
}

export default PlayerCard
