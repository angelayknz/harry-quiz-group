const data = require('../server/db/questions.json')

const questions = data.questions
let randomQuestionIndex = Math.floor(Math.random() * 30)
let randomQuestion = questions[randomQuestionIndex]
let randomQuestionArray = []

const getRandomQuestion = () => {
  if ([randomQuestionArray].includes(!randomQuestionIndex)) {
    return randomQuestionArray.push(randomQuestionIndex), randomQuestion
  } else randomQuestion
}

console.log(getRandomQuestion())
