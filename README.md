# react_practice

20211019 紀錄 開始練習  
20211029 紀錄  
20211105 紀錄  
20211122 紀錄 新增 emmet 語法  
20211123 紀錄 新增 withRouter 相關訊息  
20211124 紀錄 新增麵包屑流程
20211210 紀錄 新增異步請求 Redux 操作

### React 練習

此 repo 是用來存放 React.js 的練習  
branch 按照數字順序為練習順序 名稱則是練習的內容  
cmd-shift-v or ctrl-shift-v : markdown Open preview

#### 已完成

React 計數器  
類別型元件  
函式型元件  
Props  
JSX  
parent<>children 傳遞資料  
input 可控表單元素 拆成個別元件  
下拉式選單＋ map 資料呈現  
生命週期 函式型 類別型  
生命週期 掛載 更新 卸載各種階段  
React 加入 Bootstrap SCSS  
React 整合 jQuery (useRefs)  
React-router-dom, withRouter 高階元件  
動態麵包屑  
asyncawait 請求  
fetch 連接後端 nodejs  
useReducer+useContext  
redux intro  
redux document: reducers,actions  
redux-thunk

### 一些重要知識訊息

1. `條件 ＆＆ 求值呈現` 相當於 `if(條件)求值呈現` 的簡寫法 只有 react JSX 中才可以用
2. 在 VScode-eslint-prettier 自動格式化設定中, vscode 設定中的 `prettier.disableLanguages` 已被棄用 目前有兩個方法:
   1. 在特定語言啟用 prettier `"[css]": {"editor.defaultFormatter": "esbenp.prettier-vscode"}`
   2. 全域設定 prettier, 在特定語言禁用 `"editor.defaultFormatter": "esbenp.prettier-vscode",` `"[javascript]": {"editor.defaultFormatter": null},`
3. In react-router-dom v6, "Switch" is replaced by routes "Routes"  
   在 v6 版本中 Switch 已經被 Routes 取代, 主要強調 route element  
   `import { Switch, Route } from "react-router-dom";` >> `import { Routes ,Route } from 'react-router-dom';`  
   `<Route path="/" component={Home} />` >> `<Route path='/welcome' element={<Home/>} />`
4. Replace any withRouter usage with hooks.  
   react-router v5 版本 withRouter 被建議用 hook 取代 但還沒被移除, v6 版本已被移除無法使用, 目前找到是用 useRoutes 來做  
   不過因為還在練習階段, 所以現階段先以理解 withRouter 為主, 所以 react-router-dom react-router 降版本到 v5

### 常用 emmet

安裝 ES7 React/Redux/GraphQL/React-Native snippets 擴充元件

1. #### rafce , rafcp, rfc

   ##### 函式型快速鍵

   1. r a fc e: react const function export  
      快速鍵 變數宣告 函式型 輸出位置寫在下面(rfc 則是直接和 function 結合)
   2. rafcp 為加入 props 的函式型

2. #### imr, imrc, imbrc, imrse, imrr
   1. `import React from 'react'`
   2. `import React, { Component } from 'react'`
   3. `import { Route, Switch, NavLink, Link } from 'react-router-dom'`
   4. `import React, { useState, useEffect } from 'react'`
   5. `import React, { useRef } from 'react'`
3. #### rcc, rce, rcep
   ##### 類別型快速鍵
   1. r c c(e) p  
      快速鍵 類別型 輸出位置 props

### 麵包屑流程

1.  建立麵包屑元件配合 location.pathname 做路徑轉文字
2.  建立 config 資料夾裡面放入路徑轉文字資料
3.  在每個頁面加入麵包屑元件  
    流程:點選頁面 >> 載入麵包削元件 >> 讀取 location.pathname 配合 config 資料做路徑轉文字 >> 在渲染到每個頁面上

### Redux 基本流程

1. 建立 redux store middleware 連接 redux 跟 react (src 裡的 index.js)
   如果有異步請求需使用 redux-thunk 或是其他中介軟體(Redux-Saga)
2. 初始畫面跟 Store 拿資料渲染 (做渲染的那一頁)
3. 做事件動作 >> 由 dispatch 或是 動作建立器去判斷要進入哪個 reducer (動作建立器函式存放在 actions 資料夾)
4. 由 reducer 來去做 redux store 裡的狀態改變 (所有 reducer 放在 reducers 資料夾)
5. 將改變的狀態放入 props 裡面 (mapStateToProps, mapDispatchToProps)
6. 回到畫面再把 props 裡改變的值重新渲染 (做渲染的那一頁)
