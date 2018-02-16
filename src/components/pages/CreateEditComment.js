/* React */
import React, { Component } from 'react'

/* Prop Types */
import PropTypes from 'prop-types'

/* Route */
import { withRouter } from 'react-router-dom'

/* Redux */
import { connect } from 'react-redux'

/* UUID */
import { v4 } from 'uuid'

/* Actions */
import {
  addComment,
} from '../../actions'

/* Components*/
import ListCategories from '../categories/List'
import GoBack from '../helpers/GoBack'
import AddComment from '../comments/Add'

class CreateEditComment extends Component {

  static propTypes = {

  }

  state = {

  }


  redirect = (path) => {
    const { history } = this.props
    history.push(path)
  }

  handleAddComment = comment => {
    const { insertComment, history, post } = this.props
    const { postId } = this.props.match.params

    insertComment({
      ...comment,
      'id': v4(),
      'parentId': postId,
      'timestamp': Date.now()
    })
    
    if (post.category) {
      history.push(`/posts/${post.category}/${post.id}`)
    } else {
      history.push(`/`)
    }
  }
  
  render() {
    const { post } = this.props
    const goBackPath = post && post.category && post.id ? `/posts/${post.category}/${post.id}` : '/'
    return (
      <div className="container">
        <GoBack path={goBackPath}/>
        <div className="create-edit-page">
          <AddComment handleAddComment={this.handleAddComment} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { ...state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    insertComment: (comment) => dispatch(addComment(comment)),
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps ) (CreateEditComment)
)
