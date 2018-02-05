/* React */
import React from 'react'

/* Router */
import { Link } from 'react-router-dom'

/* Prop Types */
import PropTypes from 'prop-types'

const Single = (props) => {
  const {
    post
  } = props
  return (
    <div className="view-post container">
      <div className="single-post">
        <div className="title">{post.title}</div>
        <div className="body">{post.body}</div>
        <div className="author">{post.author}</div>
        <div className="date">{post.timestamp}</div>
        <div className="score">{post.voteScore}</div>
        <Link to={`/`}>Go back to all posts</Link>
      </div>
    </div>
  )
}

Single.propTypes = {
  post: PropTypes.object.isRequired,
}

export default Single