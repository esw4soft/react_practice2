import React from 'react'
// 高階元件樣式(HOC) 增強元件用的
import { withRouter, Link } from 'react-router-dom'

// breadcrumb
import MyBreadCrumb from '../components/MyBreadCrumb'

function ProductBaby(props) {
  // 需經過高階元件後才能得到react-router的三大鼠性質
  console.log(props)
  return (
    <>
      <h1>商品 - baby嬰兒</h1>
      <MyBreadCrumb />
      {/* 由props.match.params 可以得到網址參數值 */}
      商品編號:{props.match.params.id}
      <hr />
      {/* 網址參數值id 不存在時呈現 */}
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
    </>
  )
}

// 輸出時加上高階元件(HOC)
export default withRouter(ProductBaby)
