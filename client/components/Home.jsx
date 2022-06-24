import React, { useState, useEffect } from 'react'
import { getAllCharacters } from '../apiClient'



export default function Home() {


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

    <div className="home-wrapper bg">
      <div className="flexheader">
        <img className="emblem" src="./pics/transparenthpe.gif" alt="emblem" />

        <div className="logo-grid">
          <img className="logo logo-grid" src="./pics/hpt.png" />
        </div>
      </div>
      <div className="avatar-grid">
        {mainCharInfo.map((char) => {
          return (
            <div className="allavatar" key={char.id}>
              {/* <div>{char.character}</div> */}
              <img
                className="avatar-hermione"
                src={char.image}
                alt={char.character}
              />
            </div>
          )
        })}
      </div>

      <div className="main-button-grid">
        <button className="main-button">main button</button>
      </div>

      <form>
        <h1>Harry Potter Quiz</h1>
        <label>
          <input type="text" name="name" placeholder="Enter your name 🧙" />
        </label>
        <h4>Choose your character picture from below</h4>

        <input type="submit" value="Submit" id="submit" />
      </form>
    </div>
  )
}
