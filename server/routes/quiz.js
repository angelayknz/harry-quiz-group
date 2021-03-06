const express = require('express')

const router = express.Router()

const request = require('superagent')

// import wrongAnswersData from ('../../data/wrongAnswers')

// GET /api/v1/quiz (prefix)
router.get('/', (req, res) => {
  request
    .get(
      'https://harry-potter-api-english-production.up.railway.app/characters'
    )
    .then((response) => {
      res.json(response.body)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

module.exports = router
