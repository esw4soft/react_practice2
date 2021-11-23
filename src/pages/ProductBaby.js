import React from 'react'
// 高階元件樣式(HOC) 增強元件用的
import { withRouter } from 'react-router-dom'

function ProductBaby(props) {
  // 需經過高階元件後才能得到react-router的三大鼠性質
  console.log(props)
  return <>produect -baby</>
}

export default withRouter(ProductBaby)
