import {
  ADD_TAG,
  REMOVE_TAG,
  FETCH_INGREDIENTS_SUCCESS,
  FETCH_INGREDIENTS_FAILURE
} from '../actions/types'

import { tagsInitialState } from '../store/initialState'
import axios from 'axios'

const initialState = {
  tags: [],
  ingredientsSuggestion: [],
  loading: false,
  error: null
}

const InputReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TAG:
      const _tags = [].concat(state.tags, action.payload)
      return { ...state, tags: _tags }

    case REMOVE_TAG:
      const tags = state.tags.slice(0)
      tags.splice(action.payload, 1)
      return { ...state, tags }

    case FETCH_INGREDIENTS_SUCCESS:
      console.log('success, the data is ', action.payload.ingredients)
      return {...state, ingredientsSuggestion: action.payload.ingredients}
      break

    case FETCH_INGREDIENTS_FAILURE:
      console.log('error, the error is ', action.payload)
      return {...state, error: action.payload}
      break

    default:
      return state
  }
}

export default InputReducer