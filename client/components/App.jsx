import React, { useState, useEffect } from 'react'

import { getWelcome, getAllStudentsCharacters } from '../apiClient'

function App() {
  // const [welcomeStatement, setWelcomeStatement] = useState('')
  const [data, setData] = useState([])
  const [mainCharacters, setMainCharacters] = useState(['Harry Potter','Hermione Granger','Draco Malfoy','Ron Weasley','Luna Lovegood'])

  useEffect(() => {
    getAllStudentsCharacters()
      .then((characters) => {
        characters.map()
        mainCharacters.includes(characters.)
        })
        setData(res)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])]

  guys are you there? can you guys see this? I will restart my pc
 yes, we are here. but cant hear u . ok 
  // CHARACTERS //
  // Harry Potter
  // Hermione Granger
  // Draco Malfoy
  // Ron Weasley
  // Luna Lovegood

  // useEffect(() => {
  //   getWelcome()
  //     .then((res) => {
  //       setWelcomeStatement(res.statement)
  //     })
  //     .catch((err) => {
  //       console.error(err.message)
  //     })
  // })

  return <h1>Hello!</h1>
}

export default App
