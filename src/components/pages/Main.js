import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ListCategories from '../categories/List'
import ListPosts from '../posts/List'

/* Route */
import { withRouter } from 'react-router-dom'

/* Redux */
import { connect } from 'react-redux'

/* Actions */
import {
  getCategories,
  getPosts
} from '../../actions'


class Main extends Component {
  static propTypes = {
    categories: PropTypes.array.isRequired,
    posts: PropTypes.array.isRequired,
  }

  state = {
    posts: [],
    categories: []
  }

  componentDidMount() {
    this.props.getAllCategories()
    this.props.getAllPosts()
  }

  render() {

    const {
      categories, posts
    } = this.props

    return (
      <div className="main-page">
        <ListCategories
          categories={categories}
        />
        <ListPosts
          posts={posts}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { ...state, }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCategories(){
      dispatch(getCategories())
    },
    getAllPosts(){
      dispatch(getPosts())
    },
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps) (Main)
)
