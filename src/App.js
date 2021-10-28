import './App.css'
import React, { useState } from 'react'
import ButtonOne from './components/ButtonOne'
import ButtonTwo from './components/ButtonTwo'

function App() {
  const [appData, setAppData] = useState('App')
  return (
    <>
      <h1>App: </h1>
      <ButtonOne textData={appData} />
      <ButtonTwo />
    </>
  )
}

export default App
