const mongoose = require('mongoose')

const url = `mongodb+srv://nitin1:nitin1@cluster0-jple3.mongodb.net/test?retryWrites=true&w=majority`


const connectDB = async () => {
  await mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
  console.log('DB connected..!')
}

module.exports = connectDB