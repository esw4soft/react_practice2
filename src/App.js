import React, { useState, useEffect, useRef } from 'react'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'

// 安裝jquery模組
// yarn add jquery或 npm install jquery
import $ from 'jquery'

function App() {
  const [textdata, setTextData] = useState('hello')

  // 使用ref
  const buttonEl = useRef(null)

  // 模擬 componentDidMount (id)
  // useEffect(() => {
  //   // jquery程式碼需要寫在這裡
  //   $('#one').on('click', () => alert('(id)textdata is' + textdata))
  // }, [])

  // 模擬componentDidUpdate
  // textdata改變時要對應
  useEffect(() => {
    if (textdata !== 'hello') {
      // 移除事件監聽
      $('#one').off('click')
    }

    // 加入新的事件監聽
    $('#one').on('click', () => {
      alert('(id)textdata is ' + textdata)
    })
  }, [textdata])

  // 下面是使用ref範例--------------------------------------

  // 模擬 componentDidMount (ref)
  // useEffect(() => {
  //   // jquery程式碼要寫在這裡
  //   // 先用$函式轉為jquery使用的dom擴充元素 才能使用jquery方法
  //   $(buttonEl.current).on('click', () => {
  //     alert('(ref)textdata is' + textdata)
  //   })
  // }, [])

  // 模擬componentDidUpdate
  useEffect(() => {
    if (textdata !== 'hello') {
      // 移除事件監聽
      $(buttonEl.current).off('click')
    }
    // 加入新的事件監聽
    $(buttonEl.current).on('click', () => {
      alert('(ref)textdata is ' + textdata)
    })
  }, [textdata])
  return (
    <>
      <MyNavbar />
      <MainContent>
        <h1 className="mt-5">Sticky footer with fixed navbar</h1>
        <p className="lead">
          Pin a footer to the bottom of the viewport in desktop browsers with
          this custom HTML and CSS. A fixed navbar has been added with{' '}
          <code>padding-top: 60px;</code> on the{' '}
          <code>main &gt; .container</code>.
        </p>
        <button id="one">click me(使用id)</button>
        <button ref={buttonEl}>click me(使用ref)</button>
        <button
          onClick={() => {
            setTextData('你好')
          }}
        >
          change textdata to '你好'
        </button>
        <button onClick={() => setTextData('我又變了')}>
          change textdata to '我又變了'
        </button>
      </MainContent>
      <MyFooter />
    </>
  )
}

export default App
