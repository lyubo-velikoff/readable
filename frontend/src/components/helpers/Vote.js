/* React */
import React from 'react'

/* Prop Types */
import PropTypes from 'prop-types'

const Vote = (props) => {
  const { type, voteHandle } = props
  return (
    <div className="mt20">
      <span onClick={(event) => voteHandle(event, type.id, 'upVote')} className="action-button vote-increase"><span>+</span></span>
      <span onClick={(event) => voteHandle(event, type.id, 'downVote')} className="action-button vote-decrease ml20"><span>-</span></span>
    </div>
  )
}

Vote.propTypes = {
  type: PropTypes.object.isRequired,
  voteHandle: PropTypes.func.isRequired,
}

export default Vote

