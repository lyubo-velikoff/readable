/* React */
import React from 'react'

/* Prop Types */
import PropTypes from 'prop-types'

/* Time library */
import Time from 'react-time'

/* Components */
import PostComments from '../comments/List'
import GoBack from '../helpers/GoBack'

const Single = (props) => {
  const { post, comments, handleAddComment } = props

  return (
    <div className="view-post container">
      <GoBack />
      {post.id && (
        <div className="post-exists">
          <div className="single-post">
            Post details
            <div className="title">{post.title}</div>
            <div className="body">{post.body}</div>
            <div className="author-date">Written by {post.author} on <Time value={post.timestamp} format="YYYY/MM/DD" /></div>
            <div className="score">Score: {post.voteScore}</div>
          </div>

          <PostComments comments={comments} handleAddComment={handleAddComment} />

        </div>
      )}
    </div>
  )
}


Single.propTypes = {
  post: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
  handleAddComment: PropTypes.func.isRequired,
}

export default Single
