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
  getComment,
  addComment,
  editComment,
} from '../../actions'

/* Components*/
import ListCategories from '../categories/List'
import GoBack from '../helpers/GoBack'

class CreateEditComment extends Component {

  static propTypes = {
    comments: PropTypes.array,
  }

  state = {
    'author': '',
    'body': '',
    isEdit: this.props.match.path.includes('new') ? false : true,
  }

  handleChange = fieldName => event => {
    this.setState({
      [fieldName]: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault()
    const { insertComment, updateComment, history, post } = this.props
    const { id, parentId, body, author } = this.state
    const { postId } = this.props.match.params

    if (id) {
      // edit
      updateComment(id, {
        'body': body,
        'timestamp': Date.now()
      })

    } else {
      // new
      insertComment({
        ...this.state,
        'id': v4(),
        'parentId': postId,
        'timestamp': Date.now()
      })

    }

    let path = '/'
    if (post && post.category) {
      path = `/posts/${post.category}/${postId || parentId}`
    }
    this.redirect(path)
  }

  redirect = (path) => {
    const { history } = this.props
    history.push(path)
  }

  componentDidMount() {
    const { commentId } = this.props.match.params
    const { getSingleComment } = this.props
    if (commentId) {
      getSingleComment(commentId).then(() => {
        this.setState({ ...this.props.comments[0] })
      })
    }
  }

  render() {
    const { post } = this.props
    const goBackPath = post && post.category && post.id ? `/posts/${post.category}/${post.id}` : '/'
    const { author, body, isEdit } = this.state

    return (
      <div className="container">
        <GoBack path={goBackPath}/>
        <div className="create-edit-page">
          <div className="add-comment">
            {isEdit ? 'Edit' : 'Add'} comment
            <form onSubmit={this.onSubmit} className="mt30">
              
              {!isEdit && (
                <label>
                  Author
                  <input id="author" name ="author" type="text" value={author} onChange={this.handleChange('author')} required/>
                </label>
              )}

              <label>
                Body
                <textarea id="body" name ="body" type="text" value={body} onChange={this.handleChange('body')} required/>
              </label>

              <div className="mt20">
                <input type="submit" value="Submit" className="button"/>
              </div>

            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ comments, post }) => {
  return { 
    comments: comments,
    post: post,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    insertComment: (comment) => dispatch(addComment(comment)),
    getSingleComment: (comment) => dispatch(getComment(comment)),
    updateComment: (commentId, data) => dispatch(editComment(commentId, data)),
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps ) (CreateEditComment)
)
