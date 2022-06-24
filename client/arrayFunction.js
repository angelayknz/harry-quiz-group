const data = require('../server/db/questions.json')
let questions = data.questions
// console.log(questions)

let randomQuestionIndex = Math.floor(Math.random() * 30)

let randomQuestion = questions[randomQuestionIndex]
let randomQuestionArray = []
console.log(randomQuestionArray.push(randomQuestionIndex), randomQuestion)
// console.log(dataValues[(1, 2)])
// console.log(dataValues[Math.floor(Math.random() * dataValues.length)])
