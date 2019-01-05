import {
  ADD_TAG,
  REMOVE_TAG,
  FETCH_INGREDIENTS_BEGIN,
  FETCH_INGREDIENTS_SUCCESS,
  FETCH_INGREDIENTS_FAILURE
} from './types'

import axios from 'axios'

export const addTag = tag => ({
  type: ADD_TAG,
  payload: tag
})

export const removeTag = tag => ({
  type: REMOVE_TAG,
  payload: tag
})

export const fetchIngredients = () => {
	console.log('this ran')
  return dispatch => axios.get('http://localhost:5000/ingredients')
    .then(({ data }) => {
      dispatch(fetchIngredientsSuccess(data))
      console.log('we got the data')
    })
    .catch(err => {
    	dispatch(fetchIngredientsFailure(err))
    })
}

export const fetchIngredientsSuccess = ingredients => ({
  type: FETCH_INGREDIENTS_SUCCESS,
  payload: { ingredients }
})

export const fetchIngredientsFailure = error => ({
  type: FETCH_INGREDIENTS_FAILURE,
  payload: { error }
})