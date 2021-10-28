import './App.css'
import React, { useState } from 'react'
import ButtonOne from './components/ButtonOne'
import ButtonTwo from './components/ButtonTwo'

function App() {
  const [appData, setAppData] = useState('App')

  // 準備接收子女的內部狀態用
  const [childData, setChildData] = useState('')
  return (
    <>
      <h1>App: {childData}</h1>
      {/* 父母->子女 : 直接透過props船自己的資料給子女元件 */}
      <ButtonOne textData={appData} />

      {/* 子女->父母 : 傳一個setter函式給子女元件 */}
      <ButtonTwo setChildData={setChildData} />
    </>
  )
}

export default App
