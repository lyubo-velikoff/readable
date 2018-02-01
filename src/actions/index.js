import * as ReadableAPI from '../utils/ReadableAPI'

import {
  RECEIVE_CATEGORIES,
} from './constants'

const receiveCategories = (categories) => ({
    type: RECEIVE_CATEGORIES,
    categories
})
  
export const getCategories = () => (dispatch) => {
    ReadableAPI.fetchCategories()
    .then(data => {
        dispatch(receiveCategories(data))
    })
    .catch(err => console.error(err))
}