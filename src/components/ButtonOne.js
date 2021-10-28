import React, { useState } from 'react'

function ButtonOne(props) {
  const [oneData, setOneData] = useState('One')
  return (
    <>
      {/* 父母->子女 : 單向資料流,父母傳給子女 */}
      <h1>ButtinOne: {props.textData}</h1>
      <button>One</button>
    </>
  )
}

export default ButtonOne
