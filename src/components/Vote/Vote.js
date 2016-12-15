import React, { PropTypes } from 'react'
import './Vote.css'
import { Button } from 'components'

const Vote = ({isApproving, approve, reject, names, lastName}) => {
  return (
    <div className={'vote'}>
      <div className={'vote__small'}>
        <p>{`Should ${names.map((e)=>e + ', ')} and ${lastName} go on this quest?`}</p>
      </div>
      <div onClick={approve} className={'vote__option vote__option--approve ' + (isApproving ? 'vote__option--selected' : '')}><p>{'Approve'}</p></div>
      <div onClick={reject} className={'vote__option vote__option--reject ' + (!isApproving ? 'vote__option--selected' : '')}><p>{'Reject'}</p></div>
      <div className={'vote__small'}>
        <Button className={'vote__submit'} text={"Submit Vote"}/>
      </div>
    </div>
  )
}

Vote.propTypes = {
  lastName: PropTypes.string.isRequired,
  names: PropTypes.array.isRequired,
  isApproving: PropTypes.bool.isRequired,
  approve: PropTypes.func.isRequired,
  reject: PropTypes.func.isRequired,
}

export default Vote
