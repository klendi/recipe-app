const mongoose = require('mongoose')
const { Schema } = mongoose

require('./Ingredient')
const Ingredient = mongoose.model('Ingredient')

const RecipeSchema = new Schema({
  name: String,
  description: String,
  body: String,
  ingredients: [String],
  images: [String],
  thumbnail: String
})

mongoose.model('Recipe', RecipeSchema)
