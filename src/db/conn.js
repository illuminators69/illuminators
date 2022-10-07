const mongoose = require('mongoose')
const chalk = require('chalk')

require('dotenv').config()

main().catch((err) => {
  console.log(chalk.redBright('Error!!! Unable to connect to database: ') + err)
})

async function main() {
  await mongoose
    //For Local database- .connect('mongodb://localhost:27017/databaseName')
    .connect(
      'mongodb+srv://mongo:mongo6969@illuminators.zlv7kxe.mongodb.net/FormData?retryWrites=true&w=majority'
    )
    .then(() => {
      console.log(chalk.greenBright('Successfully connected to database!!!'))
    })
}
const db = mongoose.connection

module.exports = db
