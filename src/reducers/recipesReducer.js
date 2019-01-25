import { FETCH_RECIPE_SUCCESS, FETCH_RECIPE_FAILURE } from '../actions/types'

const initialState = {
  recipes: []
}

const RecipesReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_RECIPE_SUCCESS:
      return {...state, recipes: action.payload }

    case FETCH_RECIPE_FAILURE:
      return { ...state, error: action.payload }

    default:
      return state
  }
}

export default RecipesReducer