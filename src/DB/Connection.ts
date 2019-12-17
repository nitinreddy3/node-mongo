import * as mongoose from 'mongoose'
const dbUser: string = 'nitin1'
const dbPassword: string = 'nitin1'

const dbConnection = (user: string, pass: string): string => {
  return `mongodb+srv://${user}:${pass}@cluster0-jple3.mongodb.net/test?retryWrites=true&w=majority`
}

let database = dbConnection(dbUser, dbPassword)

const connectDBModule = async () => {
  await mongoose.connect(database, { useUnifiedTopology: true, useNewUrlParser: true })
  console.log('DB connected..!')
}

export default connectDBModule