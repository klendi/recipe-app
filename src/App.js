import React from 'react'
import InputComponent from './components/Input'
import { connect } from 'react-redux'
import Recipe from './components/Recipe'
import { fetchIngredients, fetchRecipe } from './actions'

class App extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.props.tags)
  }

  componentDidMount = () => {
    this.props.fetchIngredients()
  }

  renderRecipe = recipe => (
    <div className='card' style={{ width: 300 }}>
      <img
        className='card-img-top'
        src={recipe.thumbnail}
        alt='Card image cap'
      />
      <div className='card-body'>
        <h5 className='card-title'>{recipe.name}</h5>
        <p className='card-text'>{recipe.description}</p>
        <a href='#' class='btn btn-primary'>
          Go somewhere
        </a>
      </div>
    </div>
  )

  renderRecipeList = results => {
    if (!results || results.length === 0)
      return null

    return results.map(recipe => <Recipe recipe={recipe} />)
  }

  render() {
    const { results } = this.props
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <br />
          <br />
          <h1 className='primary-header u-text-center'>Recipe App</h1>
          <br />
          <InputComponent />
          <br/>
          <br/>
          <div className='u-text-center'>
            <button
              type='submit'
              className='btn btn-primary'
              style={{ paddingLeft: 20, paddingRight: 20 }}
            >
              Search
            </button>
          </div>
          <br />
          <br />
          <br />
          <div className='row'>
            {this.renderRecipeList(results)}
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tags: state.InputReducer.tags,
    tagsSuggestions: state.InputReducer.tagsSuggestions,
    results: state.recipesReducer.recipes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: ingredients => {
      dispatch(fetchRecipe({ ingredients }))
    },
    fetchIngredients: () => {
      dispatch(fetchIngredients())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)