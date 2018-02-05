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

import {
  getCategories,
  getPosts
} from '../../actions'

/* Pages */
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import MainPage from '../pages/Main'
import ViewPage from '../pages/View'

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
          <div className="body-content">
            <Header />
            <Route exact path='/' render={() => (
              <MainPage
                categories={categories}
                posts={posts}
              />
            )} />
            
            <Route exact path={`/:category`} render={ ({match}) => (
              <div>
                <Category
                  category={match.params.category}
                  posts={posts}
                />
              </div>
            )} />

            <Route path={`/:category/:postId`} render={ ({match}) => {
              const { postId } = match.params
              const post = posts.find( (p) => p.id === postId )
              if (!post) {
                return (<p>No post found for post id ${postId}</p>)  
              }
              return (
                <ViewPage 
                  post={post}
                />
              )
            }} />

          </div>
          
          <Footer />
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
