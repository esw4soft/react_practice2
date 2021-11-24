import React from 'react'

// breadcrumb
import MyBreadCrumb from '../components/MyBreadCrumb'
function About(props) {
  // 從app元件得到登入狀態,解構出來
  const { isAuth } = props
  return (
    <>
      <h1>關羽我們</h1>
      <MyBreadCrumb />
      {isAuth ? '會員登入,  xxx你好' : '未登入'}
    </>
  )
}

export default About