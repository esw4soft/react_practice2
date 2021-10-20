import './App.css'
import React, { useState } from 'react'
import logo from './logo.svg'

function App() {
  const [total, setTotal] = useState(0)
  const [total2, setTotal2] = useState(0)
  const [total3, setTotal3] = useState(0)

  return (
    <>
      <h1
        onClick={() => {
          setTotal(total + 1)
          setTotal2(total2 + 3)
          setTotal3(total3 + 5)
        }}
      >
        {total}
      </h1>
      <h1>{total2}</h1>
      <h1>{total3}</h1>
    </>
  )
}

export default App
