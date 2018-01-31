/* React */
import React, { Component } from 'react'

/* Router */
// import { Link } from 'react-router-dom'

/* Prop Types */
import PropTypes from 'prop-types'

class List extends Component {
    static propTypes = {
        posts: PropTypes.array.isRequired,
    }

    render() {
        const { posts } = this.props

        return (
            <div className="list-posts">
                <ol className="posts-list">
                    {posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ol>
            </div>
        )
    }
}

export default List
