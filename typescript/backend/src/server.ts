import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { connect } from './database'
import userRouter from './routes/user'

dotenv.config()
const port = process.env.PORT || 8000
const app = express()
connect()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/users', userRouter)

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})
