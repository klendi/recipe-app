import { ADD_TAG, REMOVE_TAG } from '../actions/types'
import initialState from '../store/initialState'

const InputReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TAG:
      const _tags = [].concat(state.tags, action.payload)
      return { ...state, tags: _tags }

    case REMOVE_TAG:
      const tags = state.tags.slice(0)
      tags.splice(action.payload, 1)
      return { ...state, tags }

    default:
      return state
  }
}

export default InputReducer
