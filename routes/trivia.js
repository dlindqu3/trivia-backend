const axios = require('axios')
const express = require('express')


const router = express.Router()

// base route: /api/trivia

router.get('/', (req, res) => {
  res.json({mssg: 'GET trivia route'})
})

let baseURL = `https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple`

router.get('/:category/:difficulty', async (req, res) => {
  let URL = `https://opentdb.com/api.php?amount=10&category=${req.params.category}&difficulty=${req.params.difficulty}&type=multiple`
  const response = await axios.get(URL)
  const responseData = response.data
  res.send({ resData: responseData })
})

module.exports = router 