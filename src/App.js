import './App.css'
import React, { useState } from 'react'
import AppClass from './components/AppClass.js'
import AppFunction from './components/AppFunction.js'

function App() {
  const [baseValue, setBaseValue] = useState(0)
  return (
    <>
      <AppFunction initValue={baseValue + 99} />
      <AppClass initValue={baseValue + 88} />
      <button onClick={() => setBaseValue(baseValue + 100)}>
        重設基準值+100
      </button>
    </>
  )
}

export default App
