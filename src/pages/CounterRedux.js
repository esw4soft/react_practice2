import React from 'react'
import { connect } from 'react-redux'
import {
  ADD_VALUE,
  SUB_VALUE,
} from '../actions/actionTypes'

function CounterRedux(props) {
  // 觀察props裡的得到store對應和方法
  console.log(props)

  return (
    <>
      <h1>{props.total}</h1>
      <button
        onClick={() => {
          // 改用dispatch發送動作 改變redux裡的store中的記錄的state值
          // props.dispatch({ type: 'increment' })

          // 改用變數取代
          props.dispatch({ type: ADD_VALUE })
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          // 改用dispatch發送動作 改變redux裡的store中的記錄的state值
          // props.dispatch({ type: 'decrement' })

          // 改用變數取代
          props.dispatch({ type: SUB_VALUE })
        }}
      >
        -1
      </button>
    </>
  )
}

// 將redux中的store的state(狀態)
// 對應這個元件中的props中 名稱為total
const mapStateToProps = (store) => {
  return { total: store.counter.count }
}

// 不使用這個值 略過後自動綁定store的dispatch方法到這個元件的props
const mapDispatchToProps = null

// 高階元件的樣式 必要項
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterRedux)
