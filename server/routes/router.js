import { signUp, signIn } from '../controllers/auth'
import passport from 'passport'
import mongoose from 'mongoose'
import cors from 'cors'

require('../models/User')
require('../models/Ingredient')
require('../models/Recipe')
const User = mongoose.model('User')
const Ingredient = mongoose.model('Ingredient')
const Recipe = mongoose.model('Recipe')

const passportService = require('../services/passport')

const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignin = passport.authenticate('local', { session: false })

export const initRouter = app => {
  app.use(cors())
  app.post('/signup', signUp)

  app.post('/signin', requireSignin, signIn)

  app.get('/', requireAuth, (req, res) => {
    res.send({ message: 'you made it' })
  })

  // Ingredients
  app.get('/ingredients', async (req, res) => {
    const amount = Number(req.query.amount) || 10
    const sort = req.body.sort || { date: -1 }

    Ingredient.find()
      .sort(sort)
      .limit(amount)
      .exec((err, ingredients) => {
        if (err) return res.status(500).send({ error: err })
        res.status(200).send({ ingredients })
      })
  })

  app.get('/ingredient/:id', async (req, res) => {
    Ingredient.findById(req.params.name, (err, ingredient) => {
      if (err) {
        res.status(500).send({ error: err })
        return
      }
      if (ingredient) {
        res.status(200).send(ingredient)
      } else {
        res.status(500).send({ error: 'ingredient not found' })
      }
    })
  })

  // Recipes

  app.get('/recipes', async (req, res) => {
    const amount = Number(req.query.amount) || 10
    const sort = req.body.sort || { date: -1 }

    Recipe.find()
      .sort(sort)
      .limit(amount)
      .exec((err, recipes) => {
        if (err) return res.status(500).send({ error: err })
        res.status(200).send({ recipes })
      })
  })

  app.get('/recipe/:id', async (req, res) => { 
    Recipe.findById(req.params.name, (err, recipe) => {
      if (err) {
        res.status(500).send({ error: err })
        return
      }
      if (recipe) {
        res.status(200).send(recipe)
      } else {
        res.status(404).send({ error: 'recipe not found' })
      }
    })
  })

  // Create Section
  app.post('/create/ingredient/', async (req, res) => {

    Ingredient.findOne({ name: req.body.name }, (err, existingIngredient) => {
      if (err) {
        return res.status(500).send({ error: err })
      }

      if (existingIngredient) {
        return res.status(422).send({ error: 'Ingredient already exists' })
      }

      const { name, description, thumbnail } = req.body

      //create new user instance and save it in the database
      const ingredient = new Ingredient({ name, description, thumbnail })
      ingredient.save(err => {
        if (err) {
          return res.status(500).send({ error: err })
        }
        res.json({
          message: 'You have sucessfully created the ingredient'
        })
      })
    })
  })

  app.post('/create/recipe', (req, res) => {

    const { name, description, body, thumbnail, images, ingredients } = req.body

    if (!name || !ingredients) {
      return res
        .status(422)
        .send({ error: 'You must provide valid name, description, thumbnail, ingredients' })
    }

    Recipe.findOne({ name: req.body.name }, (err, existingRecipe) => {
      if (err) {
        return res.status(500).send({ error: err })
      }

      if (existingRecipe) {
        return res.status(422).send({ error: 'Recipe already exists' })
      }


      //create new user instance and save it in the database
      const recipe = new Recipe({ name, description, body, thumbnail, images, ingredients })

      recipe.save(err => {
        if (err) {
          return res.status(500).send({ error: err })
        }
        res.json({
          message: 'You have sucessfully created the recipe'
        })
      })

    })
  })

  // Delete Section

  app.delete('/delete/ingredient/:id', async (req, res) => {
    Ingredient.findByIdAndRemove(req.params.id, (err, ingredient) => {
      if (err) {
        return res.status(500).send({ error: err })
      }

      return res.status(200).send({ sucess: true, name: ingredient.name })
    })
  })

  app.delete('/delete/recipe/:id', async (req, res) => {
    Recipe.findByIdAndRemove(req.params.id, (err, recipe) => {
      if (err) {
        return res.status(500).send({ error: err })
      }

      return res.status(200).send({ sucess: true, name: recipe.name })
    })
  })

  // Search
  app.post('/search', (req, res) => {
    const { ingredients } = req.body
    
    if(!ingredients) {
      console.error('ingredients not found')
      return
    }
    const amount = Number(req.query.amount) || 10
    const sort = req.body.sort || { date: -1 }

    Recipe.find({ ingredients: { "$in": ingredients } })
      .sort(sort)
      .limit(amount)
      .exec((err, recipes) => {
        if (err) {
          return res.status(500).send({ error: err })
        }
        res.status(200).send({ recipes })
      })
  })

}