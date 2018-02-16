/* React */
import React from 'react'

/* Prop Types */
import PropTypes from 'prop-types'

/* Components */
import Post from './Post'
import PostComments from '../comments/List'
import AddComment from '../comments/Add'
import GoBack from '../helpers/GoBack'

const Single = (props) => {
  const { post, comments, handleAddComment } = props

  return (
    <div className="view-post container">
      <GoBack />
      {post.id && (
        <div className="post-exists">
          <Post post={post} />
          <PostComments comments={comments} handleAddComment={handleAddComment} />
          <AddComment handleAddComment={handleAddComment} />
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
