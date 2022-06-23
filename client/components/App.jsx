import React, { useState, useEffect } from 'react'

import { getAllCharacters, getAllQuestions } from '../apiClient'

function App() {
  // const [welcomeStatement, setWelcomeStatement] = useState('')
  const [data, setData] = useState([])
  const mainCharacters = [
    'Hermione Jean Granger',
    'Luna Lovegood',
    'Minerva McGonagall',
    'Bellatrix Lestrange',
  ]

  const [randomNumbers, setRandomNumbers] = []

  const [mainCharInfo, setMainCharInfo] = useState([])

  useEffect(() => {
    getAllCharacters()
      .then((characters) => {
        const mains = []
        characters.forEach((character) => {
          if (mainCharacters.includes(character.character)) {
            mains.push(character)
          }
        })
        setMainCharInfo(mains)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  useEffect(() => {
    getAllQuestions()
      .then((questions) => {
        console.log(questions)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  function randomNumber() {
    const currentRandomNumber = Math.floor(Math.random() * 10)
    console.log(currentRandomNumber)
  }
  // useEffect(() => {
  //   randomNumber()
  //   })
  // }, [])

  return (
    <div>
      {mainCharInfo.map((char) => {
        return (
          <div key={char.id}>
            <div>{char.character}</div>
            <img src={char.image} alt={char.character} />
          </div>
        )
      })}
    </div>
  )
}

export default App
