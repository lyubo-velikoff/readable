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
    getSinglePost(postId){
      dispatch(getPost(postId))
    },
    getPostComments(postId) {
      dispatch(getComments(postId))
    },
    insertComment(comment) {
      dispatch(addComment(comment))
    },
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps) (View)
)
