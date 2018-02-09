/* React */
import React from 'react'

/* Router */
import { Link } from 'react-router-dom'

/* Prop Types */
import PropTypes from 'prop-types'

/* Time library */
import Time from 'react-time'

const Single = (props) => {

  const {
    post
  } = props
  
  return (
    <div className="view-post container">
      {post.id && (
        <div className="single-post">
          <div className="title">{post.title}</div>
          <div className="body">{post.body}</div>
          <div className="author-date">Written by {post.author} on <Time value={post.timestamp} format="YYYY/MM/DD" /></div>
          <div className="score">Score: {post.voteScore}</div>
          <div>
            <Link to="/" className="home-button">Go back to all posts</Link>
          </div>
        </div>
      )}
    </div>
  )
}


Single.propTypes = {
  post: PropTypes.object.isRequired,
}

export default Single
