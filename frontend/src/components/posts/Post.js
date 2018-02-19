/* React */
import React from 'react'

/* Prop Types */
import PropTypes from 'prop-types'

/* Time library */
import Time from 'react-time'

/* Router */
import { Link } from 'react-router-dom'

/* Components */
import Vote from '../helpers/Vote'

const Post = (props) => {
  const { post, deletePostHandle, votePostHandle } = props

  return (
    <div className="single-post">
      Post details
      <div className="title">{post.title}</div>
      <div className="body">{post.body}</div>
      <div className="author-date">Written by {post.author} on <Time value={post.timestamp} format="YYYY/MM/DD" /></div>
      <div className="score">Score: {post.voteScore}</div>
      <Vote type={post} voteHandle={votePostHandle}/>
      <div className="mt20">
        <Link to={`/edit/post/${post.id}`} className="edit">Edit</Link>
        <Link to="#" onClick={(event) => deletePostHandle(event, post.id)} className="delete">Delete</Link>          
      </div>
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  deletePostHandle: PropTypes.func.isRequired,
  votePostHandle: PropTypes.func.isRequired,
}

export default Post