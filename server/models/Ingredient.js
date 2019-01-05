const mongoose = require('mongoose')
const { Schema } = mongoose

const IngredientSchema = new Schema({
  name: String,
  description: String,
  thumbnail: String
})

mongoose.model('Ingredient', IngredientSchema)
