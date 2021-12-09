import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'

// 第一步: 匯入creatStore, combineReducers
import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux'

// Provider元件是一個在整合React應用時，必須要使用於最上層的元件。
// Provider用來綁定 react 跟 redux store
import { Provider } from 'react-redux'

// 第二步: 寫出reducer
// 累加器/歸納器寫法
import { rootReducer } from './reducers/index'

// 導入redux-thunk
import thunk from 'redux-thunk'

// 第三步: 由rootReducer建立store
// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__()
// )

// 第三步改中介軟體的語法
const composeEnhancers =
  window.__REDUX__DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
