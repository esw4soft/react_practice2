import './App.css'
import React, { useState } from 'react'
import ButtonOne from './components/ButtonOne'
import ButtonTwo from './components/ButtonTwo'

function App() {
  const [appData, setAppData] = useState('App')

  // 子女->父母 準備接收子女的內部狀態用
  const [childData, setChildData] = useState('')

  // 子女->子女 one 到 two
  const [oneToTwoData, setOneToTwoData] = useState('')

  //
  return (
    <>
      {/* 子女->父母 : 來自Two的資料 */}
      <h1>App: {childData}</h1>
      {/* \\\\\\\\\\\\\\\ */}
      {/* one -> 父母 : 傳一個setter函式給one */}?
      <ButtonOne appData={appData} setOneToTwoData={setOneToTwoData} />
      {/* \\\\\\\\\\\\\\\ */}
      {/* 父母 -> two: 透過props傳自己的資料給two */}
      <ButtonTwo setChildData={setChildData} oneToTwoData={oneToTwoData} />
    </>
  )
}

export default App
