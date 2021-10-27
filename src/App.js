import './App.css'
import React, { useState } from 'react'
import AppClass from './components/AppClass.js'
import AppFunction from './components/AppFunction.js'
import ColorTitle from './components/ColorTitle'

function App() {
  const [baseValue, setBaseValue] = useState(0)
  return (
    <>
      <ColorTitle color="red">採色標123題</ColorTitle>
      <ColorTitle color="red">採色標題4444</ColorTitle>
    </>
  )
}

export default App
