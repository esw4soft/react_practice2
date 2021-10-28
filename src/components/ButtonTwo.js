import React, { useState } from 'react'

function ButtonTwo() {
  const [twoData, setTwoData] = useState('Two')
  return (
    <>
      <h1>ButtonTwo: </h1>
      <button>Two</button>
    </>
  )
}

export default ButtonTwo
