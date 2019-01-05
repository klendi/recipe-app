import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import chalk from 'chalk'
import db from './db'
import { initRouter } from './routes/router'
const dontenv = require('dotenv').config()

const app = express()

const PORT = 5000
app.use(bodyParser.json({ type: '*/*' }))

db.init()
initRouter(app)

app.listen(PORT, () => {
  console.log(chalk.green(`Server ready at http://localhost:${PORT}`))
})
