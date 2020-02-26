import *  as express from 'express';
// import connectDB from './src/DB/Connection';
const app = express();
const PORT: number = 5000

// connectDB();
app.use(express.json())
// app.use('/api/users', require('./src/API/User'))


app.get('/', (req, res) => {
  console.log('Hits API end point')
  res.end()
})

app.listen(PORT)