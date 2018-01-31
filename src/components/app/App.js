/* React */
import React, { Component } from 'react'

/* Route */
import { Route } from 'react-router-dom'

/* Components */
import ListCategories from '../categories/List'
import ListPosts from '../posts/List'

/* API */
import * as ReadableAPI from '../../utils/ReadableAPI'

class App extends Component {
  state = {
    categories: [],
    posts: [],
  }

  componentDidMount() {
    ReadableAPI.getAllCategories().then((categories) => {
      this.setState({ 
        categories: categories,
      })
    })
    ReadableAPI.getAllPosts().then((posts) => {
      console.log('posts', posts)
      this.setState({ 
        posts: posts
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <div>
            <ListCategories
            categories={this.state.categories}
            />
            <ListPosts
              posts={this.state.posts}
            />
          </div>
        )} />
      </div>
    );
  }
}

export default App
