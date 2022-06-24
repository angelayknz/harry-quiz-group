import React, { useState } from 'react'

import Question from './Question'

export default function Questions(props) {
  const { questions } = props
  // console.log(questions[0])
  const [questionNumber, setQuestionNumber] = useState(0)
  return (
    <div>
      <Question question={questions[questionNumber]} />
    </div>
  )
}
