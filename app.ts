import *  as express from 'express';
import connectDB from './src/DB/Connection';
const app = express()

connectDB();
app.use(express.json())
app.use('/api/users', require('./src/API/User'))

app.listen(5000)