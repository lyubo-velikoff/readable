/* React */
import React, { Component } from 'react'

/* Route */
import { Route, withRouter } from 'react-router-dom'

import { connect } from 'react-redux'

/* Components */
import ListCategories from '../categories/List'
import ListPosts from '../posts/List'

/* API */
import * as ReadableAPI from '../../utils/ReadableAPI'

import {
  getCategories,
} from '../../actions'

class App extends Component {
  state = {
    categories: [],
    posts: [],
  }

  componentDidMount() {
    this.props.getAllCategories()
    
    ReadableAPI.getAllPosts().then((posts) => {
      console.log('posts', posts)
      this.setState({ 
        posts: posts
      })
    })
    ReadableAPI.getPostsByCategory('react').then((posts) => {
      console.log('category posts: ', posts)
    })

  }

  render() {
    const {
      categories
    } = this.props
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <div>
            <ListCategories
              categories={categories}
            />
            <ListPosts
              posts={this.state.posts}
            />
          </div>
        )} />


      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { ...state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCategories(){
      dispatch(getCategories());
    },
  }
}

export default withRouter(
  connect(mapStateToProps,mapDispatchToProps) (App)
);
