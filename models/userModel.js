const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
// bcrypt can add a "salt" to the end of passwords 

const Schema = mongoose.Schema

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

// make a new static method on our Users: 
userSchema.statics.signup = async function(email, password) {

  // validate
  if (!email || !password){
    throw Error('All fields are required')
  }

  if (!validator.isEmail(email)){
    throw Error('Please enter a valid email')
  }

  if (!validator.isStrongPassword(password)){
    throw Error('Password needs to be stronger')
  }

  const exists = await this.findOne({ email })
  if (exists){
    throw Error('Username already exists')
  }
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ email, password: hash })
  return user 
}

module.exports = mongoose.model('User', userSchema)