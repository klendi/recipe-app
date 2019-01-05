import React from 'react'

const Recipe = props => {
  const { recipe } = props
  return (
    <div class='card col-sm-4 col-md-4'>
      <div className='card-img-top'>
        <img
          style={{ width: 100 + '%', height: 100 + '%', overflow: 'hidden' }}
          src={recipe.thumbnail}
          alt='Card image cap'
        />
      </div>

      <div class='card-body'>
        <h5 class='card-title'>{recipe.name}</h5>
        <p class='card-text'>{recipe.desc}</p>
        <a href='#' class='btn btn-primary'>
          Go somewhere
        </a>
      </div>
    </div>
  )
}

export default Recipe
