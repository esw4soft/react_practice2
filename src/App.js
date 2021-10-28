import './App.css'
import React, { useState } from 'react'
import ButtonOne from './components/ButtonOne'
import ButtonTwo from './components/ButtonTwo'

function App() {
  const [life, setLife] = useState(true)
  return (
    <>
      <ButtonOne life={life} setLife={setLife} />
      <ButtonTwo setLife={setLife} />
    </>
  )
}

export default App
