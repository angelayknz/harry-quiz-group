import React, { useEffect, useState } from 'react'

export default function Question(props) {
  const { question, changeQuestionNumberFn, updateScore } = props
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
    const correctAnswer = document.getElementsByClassName('answer-clicked')[0]
    correctAnswer ? correctAnswer.classList.remove('answer-clicked') : null
  }

  function handleCorrectAnswerClick(e) {
    e.preventDefault()
    e.target.classList.add('answer-clicked')
    const wrongAnswers = document.getElementsByClassName('wrong-answer')
    const wrongAnswer1 = wrongAnswers[0]
    const wrongAnswer2 = wrongAnswers[1]
    const wrongAnswer3 = wrongAnswers[2]

    wrongAnswer1.removeEventListener('onClick', handleWrongAnswerClick)
    updateScore()
  }
  function handleWrongAnswerClick(e) {
    e.preventDefault()
    e.target.classList.add('wrong-answer-clicked')
  }

  return (
    <div>
      <div className="question">{question.question}</div>
      <div className="answer correct-answer" onClick={handleCorrectAnswerClick}>
        {question.answer}
      </div>
      {question.wrongAnswers.map((wa) => {
        return (
          <div
            key={wa}
            className="answer wrong-answer"
            onClick={handleWrongAnswerClick}
          >
            {wa}
          </div>
        )
      })}
      <button onClick={HandleNextButtonClick}>next</button>
    </div>
  )
}
