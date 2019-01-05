import { FETCH_RECIPES_SUCCESS } from '../actions/types'
import { recipesInitalState } from '../store/initialState'
import axios from 'axios'
const endpoint = 'http://localhost:5000'

const initialState = {
  
}

const RecipesReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_RECIPES_SUCCESS:
      console.log('success, we got the data', action.payload.ingredients)
      return state

    default:
      return state
  }
}

export default RecipesReducer