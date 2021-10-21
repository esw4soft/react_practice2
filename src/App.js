import './App.css'
import React, { useState } from 'react'
import AppClass from './components/AppClass.js'
import AppFunction from './components/AppFunction.js'

function App() {
  return (
    <>
      <AppFunction initValue={99} />
      <AppClass initValue={88} />
    </>
  )
}

export default App
