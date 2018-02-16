/* React */
import React from 'react'

/* Prop Types */
import PropTypes from 'prop-types'

/* Time library */
import Time from 'react-time'

const Post = (props) => {
  const { post } = props
  return (
    <div className="single-post">
      Post details
      <div className="title">{post.title}</div>
      <div className="body">{post.body}</div>
      <div className="author-date">Written by {post.author} on <Time value={post.timestamp} format="YYYY/MM/DD" /></div>
      <div className="score">Score: {post.voteScore}</div>
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
}

export default Post