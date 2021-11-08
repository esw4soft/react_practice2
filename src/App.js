import './App.css'
import React, { useState } from 'react'
import ClassLifeCycle from './components/ClassLifeCycle.js'

function App() {
  const [show, setShow] = useState(true)
  return (
    <>
      <button onClick={() => setShow(!show)}>切換Class元件</button>
      <hr />
      {show && <ClassLifeCycle />}
    </>
  )
}

export default App
