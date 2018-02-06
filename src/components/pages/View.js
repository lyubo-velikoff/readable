import React from 'react'
import PropTypes from 'prop-types'

import ViewPost from '../posts/Single'

const View = (props) => {
  // const {
  //   categories, category, posts, post
  // } = props
  console.log(props)
  const {
    post
  } = props
  return (
    <div className="view-page">
      <ViewPost post={post} />
    </div>
  )
}

View.propTypes = {
  // post: PropTypes.object.isRequired,
}

export default View