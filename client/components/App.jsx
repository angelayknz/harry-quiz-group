import React, { useState, useEffect } from 'react'

import { getAllCharacters, getAllQuestions } from '../apiClient'

import { generateRandomNumber } from '../helperFunctions'

import Home from './Home'
import Questions from './Questions'

function App() {
  const [data, setData] = useState([])

  const [questionsData, setQuestionsData] = useState([])

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
    <>
      <Home />
      <Questions questions={questionsData} />
    </>
  )
}

export default App
