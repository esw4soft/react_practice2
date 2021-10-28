import React, { useState } from 'react'

function ButtonOne(props) {
  return (
    <>
      {props.life && (
        <button onClick={() => props.setLife(false)}>我要消失</button>
      )}
    </>
  )
}

export default ButtonOne
