import { ADD_TAG, REMOVE_TAG } from './types'

export const addTag = tag => ({
  type: ADD_TAG,
  payload: tag
})

export const removeTag = tag => ({
  type: REMOVE_TAG,
  payload: tag
})
