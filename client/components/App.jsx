import React, { useState, useEffect } from 'react'
import ReactAudioPlayer from 'react-audio-player'

import { getAllQuestions } from '../apiClient'

// import { generateRandomNumber } from '../helperFunctions'

import Home from './Home'
import Questions from './Questions'

function App() {
  const [questionsData, setQuestionsData] = useState(false)

  const [score, setScore] = useState(0)

  useEffect(() => {
    getAllQuestions()
      .then((questions) => {
        setQuestionsData(questions)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  function updateScore() {
    setScore(score + 1)
  }
  console.log(score)
  return (
    <>
      <div>
        <ReactAudioPlayer src="/sounds/introSound.mp3" autoPlay controls />
      </div>

      <div id="main">
        <Home />
        {questionsData ? (
          <Questions
            questions={questionsData}
            updateScore={updateScore}
            score={score}
          />
        ) : null}
        <div id="display-score">
          Score: {score}/{questionsData.length}
        </div>
      </div>
    </>
  )
}

export default App
