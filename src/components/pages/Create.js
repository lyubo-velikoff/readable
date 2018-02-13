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
  getCategories
} from '../../actions'


import ListCategories from '../categories/List'

class Create extends Component {

  static propTypes = {
    categories: PropTypes.array.isRequired,
  }

  state = {
    title: '',
    body: '',
    author: '',
    category: 'react',
  }

  handleChange = fieldName => event => {
    this.setState({
      [fieldName]: event.target.value
    })
  }

  redirect = () => {
    const { history } = this.props
    history.push('/')
  }

  handleSubmit = event => {
    const { insertPost } = this.props

    event.preventDefault()

    console.log(this.state)
    console.log('v4', v4())
    console.log('date', Date.now())
    insertPost({
      ...this.state,
      'id': v4(),
      'timestamp': Date.now()
    })
    this.redirect()
  }

  componentDidMount() {
    const { getAllCategories } = this.props
    getAllCategories()
  }

  render() {
    const { categories } = this.props

    return (
      <div className="create-page container">
        <form onSubmit={this.handleSubmit}>
          
          <label>
            Title
            <input id="title" name ="title" type="text" value={this.state.title} onChange={this.handleChange('title')} />
          </label>

          <label>
            Body
            <textarea id="body" name ="body" type="text" value={this.state.body} onChange={this.handleChange('body')} />
          </label>

          <label>
            Author
            <input id="author" name ="author" type="text" value={this.state.author} onChange={this.handleChange('author')} />
          </label>

          <ListCategories
            categories={categories}
            category={this.state.category}
            showAll={false}
            handleCategoryChange={this.handleChange('category')}
          />

          <div className="mt20">
            <input type="submit" value="Submit" className="button"/>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { ...state }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    insertPost(post) {
      dispatch(addPost(post))
    },
    getAllCategories(){
      dispatch(getCategories())
    },
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps) (Create)
)
