/* React */
import React from 'react'

/* Prop Types */
import PropTypes from 'prop-types'

/* Components */
import Post from './Post'
import PostComments from '../comments/List'
import GoBack from '../helpers/GoBack'

const Single = (props) => {
  const { post, comments, deletePostHandle, deleteCommentHandle } = props

  return (
    <div className="view-post container">
      <GoBack />
      {post.id && (
        <div className="post-exists">
          <Post post={post} deletePostHandle={deletePostHandle} />
          <PostComments postId={post.id} comments={comments} deleteCommentHandle={deleteCommentHandle} />
        </div>
      )}
    </div>
  )
}

Single.propTypes = {
  post: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
  deletePostHandle: PropTypes.func.isRequired,
  deleteCommentHandle: PropTypes.func.isRequired,
}

export default Single
