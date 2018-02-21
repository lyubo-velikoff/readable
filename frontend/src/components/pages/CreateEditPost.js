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
  addPost,
  getCategories,
  getPost,
  editPost,
} from '../../actions'

/* Components */
import ListCategories from '../categories/List'
import GoBack from '../helpers/GoBack'

class CreateEitPost extends Component {

  static propTypes = {
    categories: PropTypes.array.isRequired,
    post: PropTypes.object,
  }

  state = {
    title: '',
    body: '',
    author: '',
    category: 'react',
    isEdit: this.props.match.path.includes('new') ? false : true,
  }

  handleChange = fieldName => event => {
    this.setState({
      [fieldName]: event.target.value
    })
  }

  redirect = (path) => {
    const { history } = this.props
    history.push(path)
  }

  handleSubmit = event => {
    const { insertPost, updatePost } = this.props
    const { id, category, title, body, author } = this.state
    
    event.preventDefault()

    if (id) {
      // edit
      updatePost(id, {
        'title': title,
        'body': body,
        'author': author,
        'category': category,
      })
      this.redirect(`/${category}/${id}`)
    } else {
      // new
      insertPost({
        ...this.state,
        'id': v4(),
        'timestamp': Date.now()
      })
      this.redirect('/')
    }
  }
  
  componentDidMount() {
    const { postId } = this.props.match.params
    const { getSinglePost, getAllCategories } = this.props
    getAllCategories()
    if (postId) {
      getSinglePost(postId).then(() => {
        this.setState({ ...this.props.post })
      })
    }
  }

  render() {
    const { categories, post } = this.props
    const { title, body, author, category, isEdit } = this.state
    const { path } = this.props.match
    const goBackPath = post && post.id && post.category && path !== '/new/post'  ? `/${post.category}/${post.id}` : '/'
    return (
      <div>
        <GoBack path={goBackPath} additionalClasses="container" />
        <div className="create-edit-page create-edit-post-page container">
          {isEdit ? 'Edit' : 'Add'} post
          <form onSubmit={this.handleSubmit} className="mt30">
            <label>
              Title
              <input id="title" name ="title" type="text" value={title} onChange={this.handleChange('title')} required />
            </label>

            <label>
              Body
              <textarea id="body" name ="body" type="text" value={body} onChange={this.handleChange('body')} required />
            </label>

            <label>
              Author
              <input id="author" name ="author" type="text" value={author} onChange={this.handleChange('author')} required />
            </label>

            <ListCategories
              categories={categories}
              category={category}
              showAll={false}
              handleCategoryChange={this.handleChange('category')}
            />

            <div className="mt20">
              <input type="submit" value="Submit" className="button"/>
            </div>
          </form>
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
    getSinglePost: (postId) => dispatch(getPost(postId)),
    getAllCategories: () => dispatch(getCategories()),
    insertPost: (data) => dispatch(addPost(data)), 
    updatePost: (postId, data) => dispatch(editPost(postId, data)),
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps ) (CreateEitPost)
)
