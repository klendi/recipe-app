import { ADD_TAG, REMOVE_TAG, FETCH_INGREDIENTS } from '../actions/types'
import { tagsInitialState } from '../store/initialState'
import axios from 'axios'

const InputReducer = (state = { tags: [], tagsSuggestions: [] }, action) => {
  switch (action.type) {
    case ADD_TAG:
      const _tags = [].concat(state.tags, action.payload)
      return { ...state, tags: _tags }

    case REMOVE_TAG:
      const tags = state.tags.slice(0)
      tags.splice(action.payload, 1)
      return { ...state, tags }

    case FETCH_INGREDIENTS:
      axios.get('http://localhost:5000/ingredients')
        .then(({ data }) => {
          console.log('fetched them all')
          console.log('raw data', data)
          console.log({...state, tagsSuggestions: data})
          return { ...state, tagsSuggestions: data }
        })

    default:
      return state
  }
}

export default InputReducer