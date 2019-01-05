import { combineReducers } from 'redux'
import InputReducer from './inputReducer'
import recipesReducer from './recipesReducer'

export default combineReducers({
  InputReducer,
  recipesReducer
})
