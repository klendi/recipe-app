import React from 'react'
import ReactTags from 'react-tag-autocomplete'
import { connect } from 'react-redux'
import { addTag, removeTag } from '../actions'

const InputComponent = props => {
  const { tags, ingredientsSuggestion, onDeleteTag, onAddTag } = props
  return (
    <ReactTags
      tags={tags}
      suggestions={ingredientsSuggestion}
      handleDelete={onDeleteTag}
      handleAddition={onAddTag}
      placeholder='Shkruaj nje ingrendient         '
    />
  )
}

const mapStateToProps = state => {
  return {
    tags: state.InputReducer.tags,
    ingredientsSuggestion: state.InputReducer.ingredientsSuggestion
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDeleteTag: id => {
      dispatch(removeTag(id))
    },
    onAddTag: tag => {
      dispatch(addTag(tag))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputComponent)
