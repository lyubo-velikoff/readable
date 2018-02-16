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
  const { post, comments, handleAddComment, deletePostHandle, deleteCommentHandle } = props

  return (
    <div className="view-post container">
      <GoBack />
      {post.id && (
        <div className="post-exists">
          <Post post={post} deletePostHandle={deletePostHandle} />
          <PostComments comments={comments} deleteCommentHandle={deleteCommentHandle} />
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
  deletePostHandle: PropTypes.func.isRequired,
  deleteCommentHandle: PropTypes.func.isRequired,
}

export default Single
