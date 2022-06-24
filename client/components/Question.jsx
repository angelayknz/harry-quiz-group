import React, { useEffect, useState } from 'react'

export default function Question(props) {
  const { question } = props
  const [questionData, setQuestionData] = useState(question)
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

  return (
    <div>
      <div>{randObj.question}</div>
      <div>{randObj.answer}</div>
      {randObj.wrongAnswers.map((wa) => {
        return <div key={wa}>{wa}</div>
      })}
      <div></div>
    </div>
  )
}
