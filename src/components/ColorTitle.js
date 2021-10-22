import React, { useState } from 'react'

function ColorTitle(props) {
  console.log(props)

  return (
    <>
      <h1 style={{ color: props.color }}>{props.children}</h1>
      <h2></h2>
    </>
  )
}

export default ColorTitle
