/* React */
import React from 'react'

/* Prop Types */
import PropTypes from 'prop-types'

/* Components */
import AddComment from './Add'

const List = (props) => {
  const { comments, handleAddComment } = props
  return (
    <div className="post-comments">
      <AddComment handleAddComment={handleAddComment} />
      Comments: {comments.length}
      {comments.map(comment => (
        <div className="comment" key={comment.id}>
          <div className="title">{comment.author}</div>
          <div className="body">{comment.body}</div>
          <div className="score">Score: {comment.voteScore}</div>
        </div>
      ))}
    </div>
  )
}

List.propTypes = {
  comments: PropTypes.array.isRequired,
  handleAddComment: PropTypes.func.isRequired,
}

export default List

