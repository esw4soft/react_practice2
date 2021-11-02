import React, { useState } from 'react'

function Converter(props) {
  // 用於輸入使用的狀態
  const [twd, setTwd] = useState(0)
  const [usd, setUsd] = useState(0)

  // 美金轉新台幣
  const usd2twd = (usd) => (28.53 * usd).toFixed(0)

  // 新台幣轉美金(2位小數點)
  const twd2usd = (twd) => (twd / 28.53).toFixed(2)

  return (
    <>
      {/* 值（value）對應狀態值（inputValue）,更動方法（onchange）對樣狀態設定方法（setInputValue） */}
      新台幣：
      <input
        type="text"
        value={twd}
        onChange={(event) => {
          // 先得到要變動的直 注意網頁上輸入的是字串需要轉為數字類型
          const newValue = +event.target.value

          // 設定新台幣值
          setTwd(newValue)

          // 設定轉換後的美金
          setUsd(twd2usd(newValue))
        }}
      />
      <hr />
      美金：
      <input
        type="text"
        value={usd}
        onChange={(event) => {
          const newValue = +event.target.value
          setUsd(newValue)
          setTwd(usd2twd(newValue))
        }}
      />
    </>
  )
}

export default Converter
