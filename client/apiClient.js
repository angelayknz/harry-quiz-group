import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'
const harryPotterURL = '/api/v1/quiz'

// *** EXAMPLE ***
// export function getWelcome() {
//   return request.get(`${serverURL}/welcome`).then((response) => response.body)
// }
// ***   ***   ***

export function getAllCharacters() {
  return request.get(harryPotterURL).then((response) => {
    const characters = response.body
    return characters
  })
}

// SUPERSEDED FUNCTIONS
export function getAllQuestions() {
  return request.get('api/v1/questions').then((response) => {
    const questions = response.body
    console.log(questions)

    //TESTING ONE QUESTION FOR WRONG ANSWERS
    // const question = questions[0]

    // const questionWithWrongAnswers = {
    //   ...question,
    //   wrongAnswers: ['wrongAnswer1', 'wrongAnswer2', 'wrongAnswer3'],
    // }

    // console.log(questionsWithWrongAnswers)
    return questions
  })
}
