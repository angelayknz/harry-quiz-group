import React, { useState } from 'react'
export default function Questions(props) {
  const { questions } = props
  console.log(questions[0])
  return (
    <div>
      <div>{questions.question}</div>
      <div>{questions.answer}</div>
      {/* {questions.wrongAnswers.map((wrongAnswer) => {
        return <div key={wrongAnswer}>{wrongAnswer}</div>
      })} */}
    </div>
  )
}
