import React from 'react'

// breadcrumb
import MyBreadCrumb from '../components/MyBreadCrumb'

function Login(props) {
  const btn = (
    <>
      <h1>未登入</h1>
      <button
        onClick={() => {
          setIsAuth(true)
        }}
      >
        登入
      </button>
    </>
  )

  const out = (
    <>
      <h1>燈出</h1>
      <button
        onClick={() => {
          setIsAuth(false)
        }}
      >
        登出
      </button>
    </>
  )
  // 從app元件得到兩個屬性值 , 解構出來
  const { isAuth, setIsAuth } = props

  return (
    <>
      <h1>會員登入頁面</h1>
      <MyBreadCrumb />

      {isAuth ? out : btn}
    </>
  )
}

export default Login
