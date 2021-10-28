import React, { useState } from 'react'

function ButtonTwo(props) {
  return (
    <>
      <button onClick={() => props.setLife(true)}>復活ㄅ</button>
    </>
  )
}

export default ButtonTwo
