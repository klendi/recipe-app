import mongoose from 'mongoose'
import chalk from 'chalk'

module.exports = {
  init: () => {
    mongoose.connect(
      'mongodb://klendi:klendi11@ds026658.mlab.com:26658/recipeapp',
      { useMongoClient: true },
      () => {
        console.log(chalk.green('Succesfully connected to the database'))
      }
    )
  }
}
