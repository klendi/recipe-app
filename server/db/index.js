import mongoose from 'mongoose'
import chalk from 'chalk'

module.exports = {
  init: () => {
    mongoose.connect(
      'mongodb://localhost:27017/recipe-app',
      { useMongoClient: true },
      err => {
      	if(err) {
      		console.log('error fam')
      		return
      	}

        console.log(chalk.green('Succesfully connected to the database'))
      }
    )
  }
}
