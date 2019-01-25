import {
  ADD_TAG,
  REMOVE_TAG,
  FETCH_INGREDIENTS_SUCCESS,
  FETCH_INGREDIENTS_FAILURE
} from '../actions/types'

const initialState = {
  tags: [],
  ingredientsSuggestion: [],
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
      return {...state, ingredientsSuggestion: action.payload.ingredients}

    case FETCH_INGREDIENTS_FAILURE:
      return {...state, error: action.payload}

    default:
      return state
  }
}

export default InputReducer