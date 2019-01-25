import {
  ADD_TAG,
  REMOVE_TAG,
  FETCH_INGREDIENTS_SUCCESS,
  FETCH_INGREDIENTS_FAILURE,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILURE,
  FETCH_RECIPE_SUCCESS,
  FETCH_RECIPE_FAILURE
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

//fetch all the ingredients
export const fetchIngredients = () => {
  return dispatch => axios.get('http://localhost:5000/ingredients')
    .then(({ data }) => {
      dispatch(fetchIngredientsSuccess(data.ingredients))
    })
    .catch(err => {
      dispatch(fetchIngredientsFailure(err))
    })
}

const fetchIngredientsSuccess = ingredients => ({
  type: FETCH_INGREDIENTS_SUCCESS,
  payload: { ingredients }
})

const fetchIngredientsFailure = error => ({
  type: FETCH_INGREDIENTS_FAILURE,
  payload: { error }
})

// Fetch all the recipes

export const fetchRecipes = amount => {
  return dispatch => axios.get('http://localhost:5000/recipes')
    .then(({ data }) => {
      dispatch(fetchRecipesSuccess(data))
    })
    .catch(err => {
      dispatch(fetchRecipesFailure(err))
    })
}

const fetchRecipesSuccess = recipes => ({
  type: FETCH_RECIPES_SUCCESS,
  payload: { recipes }
})

const fetchRecipesFailure = error => ({
  type: FETCH_RECIPES_FAILURE,
  payload: { error }
})



// Fetch recipe with specific ingredients
export const fetchRecipe = ({ ingredients }) => {
  let _ingredients = ingredients.map(x => x.name)

  return dispatch => axios.
  post('http://localhost:5000/search?amount=5', { ingredients: _ingredients })
    .then(response => {
      console.log('response is ', response.data.recipes)
      dispatch(fetchRecipeSuccess(response.data.recipes))
    })
    .catch(err => {
      if (err) {
        dispatch(fetchRecipeFailure(err))
      }
    })
}

const fetchRecipeSuccess = recipes => {
  console.log('got called')
  return {
    type: FETCH_RECIPE_SUCCESS,
    payload: recipes
  }
}

const fetchRecipeFailure = error => ({
  type: FETCH_RECIPE_FAILURE,
  payload: { error }
})