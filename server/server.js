import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import mongoose from 'mongoose'
import typeDefs from './graphql/schema'
import resolvers from './graphql/resolvers'
import cors from 'cors'
import chalk from 'chalk'
import db from './db'

const app = express()
const PORT = 8000

require('./models/User')
require('./models/Ingredient')
const User = mongoose.model('User')
const Ingredient = mongoose.model('Ingredient')

db.init()

app.use(cors('*'))

const server = new ApolloServer({ typeDefs, resolvers, context: { User, Ingredient } })
server.applyMiddleware({ app })

app.listen(PORT, () => {
  console.log(
    chalk.bgGreen(
      chalk.white(
        `Server ready at http://localhost:${PORT}${server.graphqlPath}`
      )
    )
  )
})
