import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'

// 畫面元件
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'

// 頁面連結元件
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'

// withRouter 高階元件樣式(HOC)範例
import ProductBaby from './pages/ProductBaby'
import ProductMen from './pages/ProductMen'
import ProductWomen from './pages/ProductWomen'

import NotFoundPage from './pages/NotFoundPage'
import ScrollToTop from './components/ScrollToTop'

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
          <Link to="/product/baby">商品-嬰兒</Link>

          <hr />

          {/* 用scrolltop 將switch包住 */}
          <ScrollToTop>
            {/* 以下為匹配路徑 路由列表:Switch>>Route */}
            <Switch>
              <Route path="/about">
                <About isAuth={isAuth} />
              </Route>
              <Route path="/login">
                <Login
                  isAuth={isAuth}
                  setIsAuth={setIsAuth}
                />
              </Route>

              {/* `:id?` 是網址上的參數列 */}
              <Route path="/product/baby/:id?">
                <ProductBaby isAuth={isAuth} />
              </Route>

              <Route path="/product/men">
                <ProductMen />
              </Route>

              <Route path="/product/women">
                <ProductWomen />
              </Route>

              <Route exact path="/">
                <Home isAuth={isAuth} />
              </Route>
            </Switch>
            {/* end路油表 */}
          </ScrollToTop>
        </MainContent>
        {/*頁尾 */}
        <MyFooter />
      </>
    </Router>
  )
}

export default App
