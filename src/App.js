import './App.css'
import React, { useState } from 'react'
import FunctionLifeCycle from './components/FunctionLifeCycle.js'

function App() {
  const [show, setShow] = useState(true)
  return (
    <>
      <button onClick={() => setShow(!show)}>切換Function元件</button>
      <hr />
      {show && <FunctionLifeCycle />}
    </>
  )
}

export default App
