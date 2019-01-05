import {
  ADD_TAG,
  REMOVE_TAG,
  FETCH_INGREDIENTS_BEGIN,
  FETCH_INGREDIENTS_SUCCESS,
  FETCH_INGREDIENTS_FAILURE
} from './types'

export const addTag = tag => ({
  type: ADD_TAG,
  payload: tag
})

export const removeTag = tag => ({
  type: REMOVE_TAG,
  payload: tag
})

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchIngredientsSuccess = ingredients => ({
  type: FETCH_INGREDIENTS_,
  payload: { ingredients }
});

export const fetchIngredientsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});