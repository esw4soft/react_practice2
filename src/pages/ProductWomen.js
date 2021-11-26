import React from 'react'
import { Redirect, Link } from 'react-router-dom'

const ProductWomen = (props) => {
  // 從app元件得到兩個屬性ˋ解構出來
  const { isAuth } = props
  if (isAuth === false) {
    return (
      <>
        {/* <Redirect to='/login' /> */}
        <h1>此頁面僅限會員觀看</h1>
        <Link to="/login">到會員登入葉</Link>
      </>
    )
  }

  return (
    <>
      <h1>產品 woman女性 (會員登入後)</h1>
    </>
  )
}

export default ProductWomen
