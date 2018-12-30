const mongoose = require('mongoose')
const { Schema } = mongoose

const IngredientSchema = new Schema({
  name: String
})

mongoose.model('Ingredient', IngredientSchema)
