require('dotenv').config()
const express = require('express') 
const cors = require('cors')
const mongoose = require('mongoose')
const triviaRoutes = require('./routes/trivia')
const userRoutes = require("./routes/user")

const app = express(); 

const allowedOrigins = ['http://localhost:3000']

const options = {
  origin: allowedOrigins
}

// .use for middleware
app.use(cors(options))

app.use((req, res, next) => {
  console.log(req.path, " ", req.method)
  next()
})

// middleware/routes
app.use('/api/trivia', triviaRoutes)
app.use("/api/user", userRoutes)

// db connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`connected to DB and listening on port ${process.env.PORT}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })



