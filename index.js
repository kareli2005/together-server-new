const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const authRoutes = require('./routes/authRoutes')

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

// connect to db

app.get('/', (req, res) => {
  res.send("hello world!")
})

app.use('/', authRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})