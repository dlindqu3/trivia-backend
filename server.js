require('dotenv').config()
const express = require('express') 
const triviaRoutes = require('./routes/trivia')

const app = express(); 

// .use for middleware
app.use((req, res, next) => {
  console.log(req.path, " ", req.method)
  next()
})

// routes
app.use('/api/trivia', triviaRoutes)

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`)
})

