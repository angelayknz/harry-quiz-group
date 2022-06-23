const express = require('express')

const router = express.Router()

const request = require('superagent')

const jsonData = require('../db/questions.json')

// import wrongAnswersData from ('../../data/wrongAnswers')

// GET /api/v1/questions(prefix)
router.get('/', (req, res) => {
  res.json(jsonData)
})

module.exports = router
