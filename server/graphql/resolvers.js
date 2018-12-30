import { GraphQLError } from 'graphql'

const STATUS_ENUM = {
  STATUS200: 'STATUS200',
  STATUS400: 'STATUS400',
  STATUS500: 'STATUS500'
}

export default {
  Query: {
    ingredients: async (parent, args, { Ingredient }) => {
      const ingredients = await Ingredient.find()
      return ingredients
    },
    ingredient: async (parent, args, { Ingredient }) => {
      if (args.name) {
        const ingredient = await Ingredient.findOne({ name: args.name })

        if (!ingredient) {
          return new GraphQLError("Can't find the ingredient")
        }
        return ingredient
      } else {
        return null
      }
    }
  },
  Mutation: {
    createIngredient: async (parent, args, { Ingredient }) => {
      const ingredients = await new Ingredient(args).save()
      return ingredients
    },
    deleteIngredient: async (parent, args, { Ingredient }) => {
      const ingre = await Ingredient.findOneAndRemove({ name: args.name })
      if (!ingre) {
        throw new GraphQLError('Error at deleting')
      }

      return ingre
    }
  },
  Ingredients: {
    totalCount: async (parent, args, { Ingredient }) => {
      const count = await Ingredient.find()
      return count.length
    }
  }
}
