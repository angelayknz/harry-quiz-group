import React, { useEffect, useState } from 'react'

export default function Question(props) {
  const { question, changeQuestionNumberFn } = props
  // console.log(question.answer)

  // useEffect(() => {
  //   console.log(question)
  // }, [])

  // const randObj = {
  //   answer: 'Hogwarts',
  //   category: 'Basic Harry Potter Quiz',
  //   question: 'What school does Harry Potter attend?',
  //   wrongAnswers: ['Durmstrang', 'Beauxbatons', 'Castelobruxo'],
  // }
  // console.log(randObj.answer)
  function HandleNextButtonClick(e) {
    e.preventDefault()
    changeQuestionNumberFn()
  }

  return (
    <div>
      <div>{question.question}</div>
      <div>{question.answer}</div>
      {question.wrongAnswers.map((wa) => {
        return <div key={wa}>{wa}</div>
      })}
      <button onClick={HandleNextButtonClick}>next</button>
    </div>
  )
}
