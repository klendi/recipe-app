import React from 'react'
import ReactTags from 'react-tag-autocomplete'
import { connect } from 'react-redux'
import { addTag, removeTag } from '../actions'

const InputComponent = props => {
  const { tags, tagsSuggestions, onDeleteTag, onAddTag } = props
  return (
    <ReactTags
      tags={tags}
      suggestions={tagsSuggestions}
      handleDelete={onDeleteTag}
      handleAddition={onAddTag}
      placeholder='Shkruaj nje ingrendient te ri'
    />
  )
}

const mapStateToProps = state => {
  return {
    tags: state.InputReducer.tags,
    tagsSuggestions: state.InputReducer.tagsSuggestions
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
