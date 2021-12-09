// 全部改用常數宣告的動作類型
import {
  ADD_VALUE,
  SUB_VALUE,
  DEL_TODO,
  ADD_TODO,
  INIT_VALUE,
} from './actionTypes'
// 初始化動作物件建立器
// export const initValue = (value) => {
//   return { type: INIT_VALUE, value }
// }

// // 從伺服器一開始要載入資料用
// export const initValueAsync = (value) => {

// }

// 一步-3秒後會加值

export const addValue = (value) => {
  return { type: ADD_VALUE, value }
}

export const addValueAsync = (value) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addValue(value))
    }, 2000)
  }
}

export const subValue = (value) => {
  return { type: SUB_VALUE, value }
}
