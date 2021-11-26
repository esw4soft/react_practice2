import React from 'react'
import { withRouter } from 'react-router-dom'

import MyBreadCrumb from '../components/MyBreadCrumb'

function ProductBabyBirth(props) {
  return (
    <>
      <h2>商品 - baby123嬰兒 新生兒</h2>
      <h2>商品 - baby123嬰兒 新生兒</h2>
      <MyBreadCrumb />
      倉品編號: {props.match.params.id}
      <hr />
      {!props.match.params.id && (
        <button
          onClick={() => {
            props.history.goBack()
          }}
        >
          回到上一頁
        </button>
      )}
      <hr />
      {!props.isAuth && (
        <button
          onClick={() => {
            props.history.push('/login')
          }}
        >
          到會員登入區
        </button>
      )}
      <div>123456</div>
    </>
  )
}

export default withRouter(ProductBabyBirth)
