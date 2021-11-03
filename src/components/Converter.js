import React, { useState } from 'react'
import MoneyInput from './MoneyInput'

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
      <h1>美金·新台幣互轉應用程式</h1>
      {/* 值（value）對應狀態值（inputValue）,更動方法（onchange）對樣狀態設定方法（setInputValue） */}
      <MoneyInput
        title="新台幣"
        money={twd}
        setMoney={(newValue) => {
          setTwd(newValue)
          setUsd(twd2usd(newValue))
        }}
      />
      <hr />
      <MoneyInput
        title="美金"
        money={usd}
        setMoney={(newValue) => {
          setUsd(newValue)
          setTwd(usd2twd(newValue))
        }}
      />
    </>
  )
}

export default Converter
