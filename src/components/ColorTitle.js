import React, { useState } from 'react'

function ColorTitle(props) {
  console.log(props)

  return (
    <>
      <h1 style={{ color: props.color }}>{props.children}</h1>
      <h2></h2>
      <div></div>
      <div>123</div>
    </>
  )
}

export default ColorTitle
