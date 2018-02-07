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
          <div className="author">{post.author}</div>
          <div className="date"><Time value={post.timestamp} format="YYYY/MM/DD" /></div>
          <div className="score">{post.voteScore}</div>
          <Link to={`/`}>Go back to all posts</Link>
        </div>
      )}
    </div>
  )
}


Single.propTypes = {
  post: PropTypes.object.isRequired,
}

export default Single
