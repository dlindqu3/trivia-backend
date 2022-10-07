const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const createToken = (_id) => {
  return jwt.sign({_id: _id}, process.env.SECRET, {expiresIn: '5d'})
}

// login 
const loginUser = async (req, res) => {

  const email = req.body.email 
  const password = req.body.password

  try {
    const user = await User.login(email, password)
    const token = createToken(user._id)
    // this token includes the header, payload, and secret
    // send token to browser here: 
    res.status(200).json({email, token})
  } catch(error){
    res.status(400).json({error: error.message})
  }
}

// signup 
const signupUser = async (req, res) => {
  const email = req.body.email
  const password= req.body.password
  try {
    const user = await User.signup(email, password)
    const token = createToken(user._id)
    // this token includes the header, payload, and secret
    // send token to browser here: 
    res.status(200).json({email, token})
  } catch(error){
    res.status(400).json({error: error.message})
  }
}

module.exports = {
  signupUser, loginUser
}