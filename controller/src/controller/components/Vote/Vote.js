import React, { PropTypes } from 'react'
import './Vote.css'
import { Button } from 'controller/elements'

const Vote = ({isApproving, approve, reject, names, lastName, submitVote}) => {
  return (
    <div className={'vote'}>
      <div className={'vote__small'}>
        <p>{`Should ${names.join(', ')} go on this quest?`}</p>
      </div>
      <div onClick={approve} className={'vote__option vote__option--approve ' + (isApproving ? 'vote__option--selected' : '')}><p>{'Approve'}</p></div>
      <div onClick={reject} className={'vote__option vote__option--reject ' + (!isApproving ? 'vote__option--selected' : '')}><p>{'Reject'}</p></div>
      <div className={'vote__small'}>
        <Button onClick={submitVote} text={"Submit Vote"}/>
      </div>
    </div>
  )
}

Vote.propTypes = {
  names: PropTypes.array.isRequired,
  isApproving: PropTypes.bool.isRequired,
  approve: PropTypes.func.isRequired,
  reject: PropTypes.func.isRequired,
  submitVote: PropTypes.func.isRequired,
}

export default Vote
