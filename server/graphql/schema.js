export default `
enum Status {
  STATUS200
  STATUS400
  STATUS500
}


type Ingredient {
  id: String!
  name: String!
}

type Ingredients {
  totalCount: Int
}

type Query {
  ingredient(name: String!): Ingredient
  ingredients: Ingredients
}

type Mutation {
  createIngredient(name: String!): Ingredient
  deleteIngredient(name: String!): Ingredient
}

`
