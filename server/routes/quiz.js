const express = require('express')

const router = express.Router()

const request = require('superagent')

// GET /api/v1/quiz (prefix)

router.get('/', (req, res) => {
  request
    .get('https://hp-api.herokuapp.com/api/characters/students')
    .then((response) => {
      res.json(response.body)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

module.exports = router
