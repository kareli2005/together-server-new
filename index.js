const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const authRoutes = require('./routes/authRoutes')
const mailRoutes = require('./routes/mailRoutes')
const homeRoutes = require('./routes/homeRoutes')
const connectDB = require('./config/db')

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

connectDB()

app.get('/', (req, res) => {
  res.send("hello world!")
})

app.use('/auth', authRoutes)
app.use('/mail', mailRoutes)
app.use('/home', homeRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})