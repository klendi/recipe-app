import { FETCH_RECIPES } from '../actions/types'
import { recipesInitalState } from '../store/initialState'
import axios from 'axios'
const endpoint = 'http://localhost:5000'

const initialState = {
  
}

const RecipesReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_RECIPES:
      console.log(state)
      // this.state.tags

      // axios.get(`${endpoint}/search`, )
      //fetch recipes with ingredients of state.tags
      return state

    default:
      return state
  }
}

export default RecipesReducer