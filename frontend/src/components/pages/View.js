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
  deletePost,
  deleteComment,
  votePost,
  voteComment,
} from '../../actions'

/* Components */
import ViewPost from '../posts/Single'
import PageNotFound from './NotFound'

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

  onPostVote = (event, id, option) => {
    event.preventDefault()
    const { updatePostVote } = this.props

    updatePostVote(id, option)
  }

  onCommentVote = (event, id, option) => {
    event.preventDefault()
    const { updateCommentVote } = this.props

    updateCommentVote(id, option)
  }

  render() {
    const { post, comments } = this.props

    return (
      (!post.id) ?
        <PageNotFound />
      : 
        <div className="view-page">
          <ViewPost 
            post={post} 
            comments={comments}
            deletePostHandle={this.onPostDelete}
            deleteCommentHandle={this.onCommentDelete}
            votePostHandle={this.onPostVote}
            voteCommentHandle={this.onCommentVote}
          />
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
    removePost: (post) => dispatch(deletePost(post)),
    removeComment: (comment) => dispatch(deleteComment(comment)),
    updatePostVote: (postId, option) => dispatch(votePost(postId, option)),
    updateCommentVote: (commentId, option) => dispatch(voteComment(commentId, option)),
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps) (View)
)
