import React from 'react'

// 高階元件樣式(HOC) 增強元件用
import { withRouter } from 'react-router-dom'

function ProductMen(props) {
  console.log(props)

  let searchParams = new URLSearchParams(
    props.location.search
  )

  // iterate the search parameters
  for (let p of searchParams) {
    console.log(p)
  }

  return (
    <>
      <h1>product - men</h1>
      <p>動作(action) : {searchParams.get('action')}</p>
      <p>
        查詢字串(keywords) : {searchParams.get('keywords')}
      </p>
    </>
  )
}

export default withRouter(ProductMen)
