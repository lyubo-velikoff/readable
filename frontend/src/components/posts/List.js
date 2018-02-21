/* React */
import React from 'react'

/* Router */
import { Link } from 'react-router-dom'

/* Prop Types */
import PropTypes from 'prop-types'

/* Time library */
import Time from 'react-time'

/* Components */
import Vote from '../helpers/Vote'

const List = (props) => {
  const { posts, votePostHandle, deletePostHandle } = props

  return (
    <div className="list-posts">
      <ul className="posts-list container">
        {posts.map(post => (
          <li key={post.id} className="post">
            <Link to={`/${post.category}/${post.id}`} className="post-link">
              {post.title}
              <div className="post-date post-author">Written by {post.author} on <Time value={post.timestamp} format="YYYY/MM/DD" /></div>
              <span className="post-comment-count">Comments: {post.commentCount}</span>
              <span className="post-score">
                Score: {post.voteScore}
              </span>
              <span className="post-icon">&raquo;</span>
              <Vote type={post} voteHandle={votePostHandle}/>
            </Link>
            <div className="pt30">
              <Link to={`/edit/post/${post.id}`} className="edit">Edit</Link>
              <Link to="#" onClick={(event) => deletePostHandle(event, post.id)} className="delete">Delete</Link>          
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

List.propTypes = {
  posts: PropTypes.array.isRequired,
  votePostHandle: PropTypes.func.isRequired,
  deletePostHandle: PropTypes.func.isRequired,
}

export default List