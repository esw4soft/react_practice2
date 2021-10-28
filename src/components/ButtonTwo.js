import React, { useState } from 'react'

function ButtonTwo(props) {
  const [twoData, setTwoData] = useState('Two')
  return (
    <>
      <h1>ButtonTwo: </h1>
      {/* 子女->父母 : 利用父母元件的setter來傳自己的狀態資料給父母 */}
      <button onClick={() => props.setChildData(twoData)}>Two</button>
    </>
  )
}

export default ButtonTwo
