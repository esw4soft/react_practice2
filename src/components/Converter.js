import React, { useState } from 'react'

function Converter(props) {
  // 用於輸入使用的狀態
  const [twd, setTwd] = useState(0)
  const [usd, setUsd] = useState(0)

  return (
    <>
      {/* 值（value）對應狀態值（inputValue）,更動方法（onchange）對樣狀態設定方法（setInputValue） */}
      新台幣：
      <input
        type="text"
        value={twd}
        onChange={(event) => {
          setTwd(event.target.value)
        }}
      />
      <hr />
      美金：
      <input
        type="text"
        value={usd}
        onChange={(event) => {
          setUsd(event.target.value)
        }}
      />
    </>
  )
}

export default Converter
