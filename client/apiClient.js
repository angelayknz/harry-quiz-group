import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'
const harryPotterURL = '/api/v1/quiz'

// *** EXAMPLE ***
// export function getWelcome() {
//   return request.get(`${serverURL}/welcome`).then((response) => response.body)
// }
// ***   ***   ***

export function getAllStudentsCharacters() {
  return request.get(harryPotterURL).then((response) => {
    console.log(response.body)
  })
}
