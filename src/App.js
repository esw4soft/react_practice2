import logo from './logo.svg'
import './App.css'
import React, { useState } from 'react'

function App() {
  const [total, setTotal] = useState(0)

  return <h1 onClick={() => setTotal(total + 1)}>{total}</h1>
}

export default App
