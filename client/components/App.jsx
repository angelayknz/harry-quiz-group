import React, { useState, useEffect } from 'react'

import { getAllCharacters, getAllQuestions } from '../apiClient'

import { generateRandomNumber } from '../helperFunctions'

import Home from './Home'
import Questions from './Questions'

function App() {
  const [data, setData] = useState([])

  const [questionsData, setQuestionsData] = useState(false)

  useEffect(() => {
    getAllQuestions()
      .then((questions) => {
        setQuestionsData(questions)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
    <div>
      <Home />
      {questionsData ? <Questions questions={questionsData} /> : null}
    </div>
  )
}

export default App
