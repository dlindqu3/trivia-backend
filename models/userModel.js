const mongoose = require('mongoose')

const Schema = mongoose.Schema

// Other schema, quiz: 
// userID
// questions 
// options
// averageScore
// currentCorrect
// currentQuestion

const userSchema = new Schema({
  email: {
    type: String, 
    required: true, 
    unique: true
  },
  password: {
    type: String,
    required: true
  }, 
  averageScore: {
    type: Number,
    required: false 
  }
})

module.exports = mongoose.model('User', userSchema)