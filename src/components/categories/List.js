/* React */
import React, { Component } from 'react'

/* Router */
// import { Link } from 'react-router-dom'

/* Prop Types */
import PropTypes from 'prop-types'

class List extends Component {
    static propTypes = {
        categories: PropTypes.array.isRequired,
    }

    render() {
        const { categories } = this.props

        return (
            <div className="list-categories">
                <ol className="categories-list">
                    {categories.map(category => (
                        <li key={category.path}>{category.name}</li>
                    ))}
                </ol>
            </div>
        )
    }
}

export default List
