/* React */
import React from 'react'

/* Prop Types */
import PropTypes from 'prop-types'

/* Router */
import { Link } from 'react-router-dom'

/* Comments */
import Vote from '../helpers/Vote'

const List = (props) => {
  const { comments, deleteCommentHandle, postId, voteCommentHandle } = props
  return (
    <div className="post-comments">
      Comments: {comments.length}
      {comments.map(comment => (
        <div className="comment" key={comment.id}>
          <div className="title">{comment.author}</div>
          <div className="body">{comment.body}</div>
          <div className="score">Score: {comment.voteScore}</div>
          <Vote type={comment} voteHandle={voteCommentHandle} />
          <div className="mt30">
            <Link to={`/edit/comment/${comment.id}`} className="edit">Edit</Link>
            <Link to="#" onClick={(event) => deleteCommentHandle(event, comment.id)} className="delete">Delete</Link>          
          </div>
        </div>
      ))}
      <div className="mt30">
        <Link to={`/new/comment/${postId}`} className="button">New comment</Link>
      </div>
    </div>
  )
}

List.propTypes = {
  comments: PropTypes.array.isRequired,
  deleteCommentHandle: PropTypes.func.isRequired,
  voteCommentHandle: PropTypes.func.isRequired,
}

export default List

