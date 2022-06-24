import React, { useState } from 'react'

import Question from './Question'

export default function Questions(props) {

  const { questions, updateScore, score } = props

  // console.log(questions[0])
  const [questionNumber, setQuestionNumber] = useState(0)

  let randomQuestionIndex = Math.floor(Math.random() * 30)
  let randomQuestion = questions[randomQuestionIndex]
  let randomQuestionArray = []

  console.log(
    randomQuestionArray.push(randomQuestionIndex),
    randomQuestion,
    randomQuestionIndex
  )

  function changeQuestionNumber() {
    setQuestionNumber(questionNumber + 1)
  }

  return (
    <div>
      <Question
        question={questions[questionNumber]}
        changeQuestionNumberFn={changeQuestionNumber}
        updateScore={updateScore}
      />
    </div>
  )
}
