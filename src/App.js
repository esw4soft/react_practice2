import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'

import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    // ROUTER 包 <></>
    <Router>
      <>
        <MyNavbar />
        <MainContent>
          {/* navbar:Link */}
          <Link to="/">首頁</Link>
          <Link to="/about">關於我們</Link>

          {/* 以下為匹配路徑 路由列表:Switch>>Route */}
          <Routes>
            <Route path="/about" element={<About />} />
            {/* exact: 精確路徑 , 如果沒寫exact可能會連到路徑有/的任何頁*/}
            <Route exact path="/" element={<Home />} />
          </Routes>
        </MainContent>
        <MyFooter />
      </>
    </Router>
  )
}

export default App
