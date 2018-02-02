/* React */
import React, { Component } from 'react'

/* Route */
import { BrowserRouter as Router, 
  Route, 
  withRouter 
} from 'react-router-dom'

import { connect } from 'react-redux'

/* Components */
import Category from '../categories/Category'
import ListCategories from '../categories/List'

import ListPosts from '../posts/List'

import {
  getCategories,
  getPosts
} from '../../actions'

import MainPage from '../pages/Main'

class App extends Component {
  state = {
    categories: [],
    posts: [],
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
      <Router>
        <div className="App">

          <ListCategories
            categories={categories}
          />

          <Route exact path='/' render={() => (
            <div>
            <ListPosts
              posts={posts}
            />
            </div>
          )} />

          <Route path={`/:category`} render={ ({match}) => (
            <div>
              <Category
                category={match.params.category}
                posts={posts}
              />
            </div>
          )} />

        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return { ...state }
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
  connect(mapStateToProps, mapDispatchToProps) (App)
)
