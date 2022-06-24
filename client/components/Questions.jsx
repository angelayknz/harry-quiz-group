import React, { useState } from 'react'

import Question from './Question'

export default function Questions(props) {
  const { questions, updateScore, score } = props
  // console.log(questions[0])
  const [questionNumber, setQuestionNumber] = useState(0)

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
