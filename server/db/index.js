import mongoose from 'mongoose'
import chalk from 'chalk'

module.exports = {
  init: () => {
    mongoose
      .connect(
        'mongodb://klendi:klendi11@ds026658.mlab.com:26658/recipeapp',
        { useNewUrlParser: true }
      )
      .then(() => {
        console.log(chalk.bgGreen('Succesfully connected to the database'))
      })
  }
}
