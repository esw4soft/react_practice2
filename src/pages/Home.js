import React from 'react'

function Home(props) {
  const { isAuth } = props
  return (
    <>
      <h1>首頁</h1>
      {isAuth ? '會員登入, Xx你好' : '未登入'}
    </>
  )
}

export default Home
