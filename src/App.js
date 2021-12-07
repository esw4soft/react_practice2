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
import ProductBabyBirth from './pages/ProductBabyBirth'
import ProductHome from './pages/ProductHome'
import ProductMen from './pages/ProductMen'
import ProductWomen from './pages/ProductWomen'

import Member from './pages/Member'

import NotFoundPage from './pages/NotFoundPage'
import ScrollToTop from './components/ScrollToTop'

// Redux
import CounterRedux from './pages/CounterRedux'

// 定義樣式給 useContext使用
const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
}
// 建立樣板ThemeContext 可以獨立export出去一個檔案
export const ThemeContext = React.createContext(
  themes.light
)

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [themeNow, setThemeNow] = useState(themes.light)

  return (
    // ROUTER 包 <></>
    <Router>
      <body
        style={{
          background: themeNow.foreground,
          color: themeNow.background,
        }}
      >
        <MyNavbar />
        <MainContent>
          <button
            onClick={() => {
              setThemeNow(
                themeNow === themes.light
                  ? themes.dark
                  : themes.light
              )
            }}
          >
            切換布景
          </button>
          {/* 使用a標籤和link做比較 */}

          <h1>link/to</h1>
          {/* navbar:Link */}
          <Link to="/">首頁</Link>
          <br />
          <Link to="/about">關於我們</Link>
          <br />
          <Link to="/login">會員登入頁面</Link>
          <br />
          <Link to="/product/baby">商品-嬰兒</Link>
          <br />
          <Link to="/product/baby/birth">新生兒</Link>
          <br />
          <Link to="/counter-redux">redux</Link>

          <hr />

          {/* 用scrolltop 將switch包住 */}
          <ScrollToTop>
            {/* 套用全站樣式 */}
            <ThemeContext.Provider value={themeNow}>
              {/* <ThemeContext.Provider value={themeNow}> */}
              {/* 以下為匹配路徑 路由列表:Switch>>Route */}
              <Switch>
                <Route path="/about">
                  <About isAuth={isAuth} />
                </Route>
                <Route path="/member">
                  <Member />
                </Route>
                <Route path="/login">
                  <Login
                    isAuth={isAuth}
                    setIsAuth={setIsAuth}
                  />
                </Route>

                {/* `:id?` 是網址上的參數列 */}
                {/* <Route path="/product/baby/:id?">
                <ProductBaby isAuth={isAuth} />
              </Route> */}
                <Route path="/product/baby">
                  <ProductBaby isAuth={isAuth} />
                </Route>
                <Route path="/product/baby/birth">
                  <ProductBabyBirth isAuth={isAuth} />
                </Route>

                <Route path="/product">
                  <ProductHome />
                </Route>
                <Route path="/product/men">
                  <ProductMen />
                </Route>

                <Route path="/product/women">
                  <ProductWomen isAuth={isAuth} />
                </Route>

                <Route exact path="/">
                  <Home isAuth={isAuth} />
                </Route>

                {/* redux */}
                <Route path="/counter-redux">
                  <CounterRedux />
                </Route>

                {/* path="*" 表如果沒有此路徑都會到此頁 故寫在最下方 */}
                <Route path="*">
                  <NotFoundPage />
                </Route>
              </Switch>
              {/* end路油表 */}
            </ThemeContext.Provider>
          </ScrollToTop>
          {/* <CounterRedux /> */}
        </MainContent>
        {/*頁尾 */}
        <MyFooter />
      </body>
    </Router>
  )
}

export default App
