import express from 'express'
import connectDB from './utils/dbConnection.js'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
connectDB();

app.use('/api/users', userRoutes)

app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "default-src * 'self' blob: data:;");
  next();
});


app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
