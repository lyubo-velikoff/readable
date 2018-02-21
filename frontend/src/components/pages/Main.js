import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ListCategories from '../categories/List'
import ListPosts from '../posts/List'

/* Route */
import { withRouter, Link } from 'react-router-dom'

/* Redux */
import { connect } from 'react-redux'

/* Sort by */
import sortBy from 'sort-by'

/* Actions */
import {
  getCategories,
  getPosts,
  votePost,
  deletePost
} from '../../actions'

/* Helpers */
import SortOptions from '../helpers/SortOptions'

class Main extends Component {
  static propTypes = {
    categories: PropTypes.array.isRequired,
    posts: PropTypes.array.isRequired,
    sort: PropTypes.string,
    order: PropTypes.string,
  }

  state = {
    posts: [],
    categories: [],
    sort: 'voteScore',
    order: '-',
    sortOptions: [
      {
      'label': 'Score',
      'field': 'voteScore'
      },
      {
        'label': 'Time',
        'field': 'timestamp'
        },
    ]
  }

  componentDidMount() {
    const { getAllCategories, getAllPosts, } = this.props
    getAllPosts()
    getAllCategories()
  }

  sortPosts = field => event => {
    this.setState({
      'sort': field,
      'order': this.state.order === '-' ? '' : '-'
    })
  }

  onPostVote = (event, id, option) => {
    event.preventDefault()
    const { updatePostVote } = this.props

    updatePostVote(id, option)
  }

  onPostDelete = (event, id) => {
    event.preventDefault()
    const { removePost } = this.props

    if(window.confirm('Are you sure?')) {
      removePost(id).then(() => {
        this.redirect('/')
      })
    }
  }

  redirect = (path) => {
    const { history } = this.props
    history.push(path)
  }

  render() {
    const { categories, posts, history } = this.props
    const categoryParam = this.props.match.params.category
    const { sort, order, sortOptions } = this.state
    const orderBy = order + sort
    const postsToDisplay = posts.sort(sortBy(orderBy))
    
    return (
      <div className="main-page">
        <div className="container">
          <div className="section-title">All of our posts</div>
          <p>Filter by category &nbsp;</p>
          <ListCategories
            categories={categories}
            category={categoryParam}
            showAll={true}
            handleCategoryChange={(e) => history.push(`/${e.target.value}`)}
          />
        </div>

        <SortOptions 
          options={sortOptions}
          sort={sort}
          order={order}
          sortPostsHandle={this.sortPosts}
        />

        <ListPosts
          posts={postsToDisplay}
          votePostHandle={this.onPostVote}
          deletePostHandle={this.onPostDelete}
        />
        <div className="action-container">
          <Link to="/new/post" className="action-button"><span>+</span></Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ categories, posts }, { match }) => {
  const { category } = match.params
  
  if (category && posts) {
    posts = posts.filter(post => post.category === category)
  }

  return {
    categories: categories,
    posts: posts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCategories: () => dispatch(getCategories()),
    getAllPosts: () => dispatch(getPosts()),
    updatePostVote: (postId, option) => dispatch(votePost(postId, option)),
    removePost: (post) => dispatch(deletePost(post)),
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps) (Main)
)
