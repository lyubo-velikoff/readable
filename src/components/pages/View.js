/* React */
import React, { Component }from 'react'

/* Prop Types */
import PropTypes from 'prop-types'

/* Route */
import { withRouter } from 'react-router-dom'

/* Redux */
import { connect } from 'react-redux'

/* Actions */
import {
  getPost,
  getComments,
  addComment,
  deletePost,
  deleteComment,
} from '../../actions'

/* UUID */
import { v4 } from 'uuid'

/* Components */
import ViewPost from '../posts/Single'

class View extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
    comments: PropTypes.array.isRequired,
  }

  state = {
    post: {},
    comments: [],
  }

  componentDidMount() {
    const { postId } = this.props.match.params
    this.props.getSinglePost(postId)
    this.props.getPostComments(postId)
  }

  handleAddComment = comment => {
    const { insertComment } = this.props
    const { postId } = this.props.match.params

    insertComment({
      ...comment,
      'id': v4(),
      'parentId': postId,
      'timestamp': Date.now()
    })

  }

  redirect = (path) => {
    const { history } = this.props
    history.push(path)
  }

  onPostDelete = (event, id) => {
    event.preventDefault()
    const { removePost } = this.props

    if(window.confirm('Are you sure?')) {
      removePost(id).then(() => {
        this.redirect('/')
      })
    }
  }

  onCommentDelete = (event, id) => {
    event.preventDefault()
    const { removeComment } = this.props

    if(window.confirm('Are you sure?')) {
      removeComment(id)
    }
  }

  render() {
    const { post, comments } = this.props
    const { postId } = this.props.match.params

    return (
      <div className="view-page">

        {post.id ? (
          <ViewPost 
            post={post} 
            comments={comments}
            handleAddComment={this.handleAddComment}
            deletePostHandle={this.onPostDelete}
            deleteCommentHandle={this.onCommentDelete}
          />
        ) : (
          <div className="no-post container">
            Post id: {postId} does not exists
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { ...state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSinglePost: (postId) => dispatch(getPost(postId)),
    getPostComments: (postId) => dispatch(getComments(postId)),
    insertComment: (comment) => dispatch(addComment(comment)),
    removePost: (post) => dispatch(deletePost(post)),
    removeComment: (comment) => dispatch(deleteComment(comment)),
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps) (View)
)
