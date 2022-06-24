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
  function handleNextButtonClick(e) {
    e.preventDefault()
    changeQuestionNumberFn()
    const correctAnswer = document.getElementsByClassName('answer-clicked')[0]
    correctAnswer ? correctAnswer.classList.remove('answer-clicked') : null
  }

  function handleCorrectAnswerClick(e) {
    e.preventDefault()
    e.target.classList.add('answer-clicked')
    updateScore()
    const wrongAnswers = document.getElementsByClassName('wrong-answer')
    const wrongAnswer1 = wrongAnswers[0]
    const wrongAnswer2 = wrongAnswers[1]
    const wrongAnswer3 = wrongAnswers[2]

    wrongAnswer1.removeEventListener('mouseDonw', handleWrongAnswerClick)

    const next = document.getElementById('next-button')
    next.addEventListener('click', handleNextButtonClick, true)
  }

  function handleWrongAnswerClick(e) {
    e.preventDefault()
    e.target.classList.add('wrong-answer-clicked')

    const correctAnswer = document.getElementsByClassName('correct-answer')[0]
    correctAnswer ? correctAnswer.classList.add('answer-clicked') : null

    const next = document.getElementById('next-button')
    next.addEventListener('click', handleNextButtonClick, true)
  }

  return (
    <div className="display-question">
      <div className="question">{question.question}</div>
      <div className="answer correct-answer" onClick={handleCorrectAnswerClick}>
        {question.answer}
      </div>
      {question.wrongAnswers.map((wa) => {
        return (
          <div
            key={wa}
            className="answer wrong-answer"
            onMouseDown={handleWrongAnswerClick}
          >
            {wa}
          </div>
        )
      })}
      <button id="next-button">next</button>
    </div>
  )
}
