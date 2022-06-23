import React from 'react'

export default function Home() {
  return (
    <>
      <form>
        <h1>Harry Potter Quiz</h1>
        <label>
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}
