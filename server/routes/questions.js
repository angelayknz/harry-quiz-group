const express = require('express')

const router = express.Router()

const request = require('superagent')

const jsonData = require('../db/questions.json')
const wrongAnswersData = require('../db/wrongAnswers.json')

// import wrongAnswersData from ('../../data/wrongAnswers')

// GET /api/v1/questions(prefix)
router.get('/', (req, res) => {
  const questions = jsonData.questions
  const questionsWithWrongAnswers = []
  questions.map((questionInfo) => {
    for (let i = 0; i < wrongAnswersData.length; i++) {
      if (wrongAnswersData[i].question === questionInfo.question) {
        questionsWithWrongAnswers.push({
          ...questionInfo,
          wrongAnswers: wrongAnswersData[i].wrongAnswers,
        })
      }
    }
  })
  // const json = JSON.stringify(questionsWithWrongAnswers)
  res.json(questionsWithWrongAnswers)
})

module.exports = router
