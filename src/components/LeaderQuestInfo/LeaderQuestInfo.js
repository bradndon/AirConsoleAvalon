import React, { PropTypes } from 'react'
import './LeaderQuestInfo.css'

const LeaderQuestInfo = ({numLeft, isReady, sendReady}) => {
  return (
    <div className='LeaderQuestInfo'>
      <p>{`You are the leader! Please select ${numLeft} more players for the quest!`}</p>
      <button onClick={sendReady} disabled={isReady}>{"Start Quest!"}</button>
    </div>
  )
}

LeaderQuestInfo.propTypes = {
  numLeft: PropTypes.number.isRequired,
  isReady: PropTypes.bool.isRequired,
  sendReady: PropTypes.func.isRequired,
}

export default LeaderQuestInfo
