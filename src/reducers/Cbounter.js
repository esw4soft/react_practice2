import { useReducer } from 'react'

// 初始狀態
const initialState = { count: 5 }

// 累加器/歸納器寫法
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

function Counter() {
  // 宣告一組狀態 + 發送狀態的鉤子
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  )

  console.log(initialState)
  console.log(state)
  console.log(state.count)

  return (
    <>
      <h1>{state.count}</h1>
      <button
        onClick={() => dispatch({ type: 'increment' })}
      >
        +1
      </button>
      <button
        onClick={() => dispatch({ type: 'decrement' })}
      >
        -1
      </button>
    </>
  )
}

export default Counter
