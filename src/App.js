import React from 'react'
import InputComponent from './components/Input'
import { connect } from 'react-redux'

class App extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    console.log('submit')
  }

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <h1 className='primary-header u-text-center'>Recipe App</h1>
          <InputComponent />
          <br />
          <button type='submit' className='btn btn-primary'>
            Search
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tags: state.InputReducer.tags,
    tagsSuggestions: state.InputReducer.tagsSuggestions
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
