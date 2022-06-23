import React, { useState, useEffect } from 'react'
import { getAllCharacters } from '../apiClient'

export default function Home(props) {
  const [mainCharInfo, setMainCharInfo] = useState([])
  const mainCharacters = [
    'Hermione Jean Granger',
    'Luna Lovegood',
    'Minerva McGonagall',
    'Bellatrix Lestrange',
  ]

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

  return (
    <>
      <form>
        <h1>Harry Potter Quiz</h1>
        <label>
          <input type="text" name="name" placeholder="Enter your name 🧙" />
        </label>
        <h4>Choose your character picture from below</h4>

        {mainCharInfo.map((char) => {
          return (
            <div key={char.id}>
              <div>{char.character}</div>
              <img src={char.image} alt={char.character} />
            </div>
          )
        })}

        <input type="submit" value="Submit" />
      </form>
    </>
  )
}
