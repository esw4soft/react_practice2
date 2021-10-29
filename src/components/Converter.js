import React, { useState } from 'react'

function Converter(props) {
  // 用於輸入使用的狀態
  const [inputValue, setInputValue] = useState('')

  console.log(inputValue)

  return (
    <>
      {/* 值（value）對應狀態值（inputValue）,更動方法（onchange）對樣狀態設定方法（setInputValue） */}
      <input
        type="text"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value)
        }}
      />
    </>
  )
}

export default Converter
