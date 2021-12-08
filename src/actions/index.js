// 全部改用常數宣告的動作類型
import {
  ADD_VALUE,
  SUB_VALUE,
  DEL_TODO,
  ADD_TODO,
} from './actionTypes'

// 寫出動作建立器(函式)
export const addValue = (value) => {
  return { type: ADD_TODO, value }
}

export const subValue = (value) => {
  return { type: DEL_TODO, value }
}
