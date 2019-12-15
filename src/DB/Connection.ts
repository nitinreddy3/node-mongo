import * as mongoose from 'mongoose'
const url = `mongodb+srv://nitin1:nitin1@cluster0-jple3.mongodb.net/test?retryWrites=true&w=majority`


const connectDBModule = async () => {
  await mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
  console.log('DB connected..!')
}

export default connectDBModule