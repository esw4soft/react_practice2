import React from 'react'
import Counter from '../reducers/Cbounter.js'
import Context1 from './Context1.js'

function Home(props) {
  const { isAuth } = props
  return (
    <>
      <h1>首頁</h1>
      {isAuth ? '會員登入, Xx你好' : '未登入'}
      <Counter />
      <Context1 />
    </>
  )
}

export default Home
