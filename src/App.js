import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

// 畫面元件
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'

// 頁面連結元件
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'

function App() {
  const [isAuth, setIsAuth] = useState(false)

  return (
    // ROUTER 包 <></>
    <Router>
      <>
        <MyNavbar />
        <MainContent>
          {/* 使用a標籤和link做比較 */}

          <h1>link/to</h1>
          {/* navbar:Link */}
          <Link to="/">首頁</Link>
          <Link to="/about">關於我們</Link>
          <Link to="/login">會員登入頁面</Link>

          <hr />

          <h1>a/href</h1>
          <a href="/">首頁</a>
          <a href="/about">關於我們</a>
          <a href="/login">會員登入頁面</a>

          {/* 以下為匹配路徑 路由列表:Switch>>Route */}
          <Routes>
            <Route path="/about" element={<About isAuth={isAuth} />} />
            <Route
              path="/login"
              element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />}
            ></Route>
            {/* exact: 精確路徑 , 如果沒寫exact可能會連到路徑有/的任何頁*/}
            <Route exact path="/" element={<Home isAuth={isAuth} />} />
          </Routes>
        </MainContent>
        <MyFooter />
      </>
    </Router>
  )
}

export default App
