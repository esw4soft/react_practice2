# react_practice

20211019 紀錄  
20211029 紀錄  
20211105 紀錄

### React 練習

此 repo 是用來存放 react.js 的練習  
練習的檔案主要在 src 和 components 的資料夾  
branch 按照數字順序為練習順序 名稱則是練習的內容

#### 已完成

React 計數器  
類別型元件  
函式型元件  
Props  
JSX  
parent<>children 傳遞資料  
input 可控表單元素  
input 拆成個別元件  
下拉式選單＋ map 資料呈現

### 一些重要知識

1. `條件 ＆＆ 求值呈現` 相當於 `if(條件)求值呈現` 的簡寫法 只有 react JSX 中才可以用
2. 在 VScode-eslint-prettier 自動格式化設定中, vscode 設定中的 `prettier.disableLanguages` 已被棄用 目前有兩個方法:
   1. 在特定語言啟用 prettier `"[css]": {"editor.defaultFormatter": "esbenp.prettier-vscode"}`
   2. 全域設定 prettier, 在特定語言禁用 `"editor.defaultFormatter": "esbenp.prettier-vscode",` `"[javascript]": {"editor.defaultFormatter": null},`

### emmet

1. #### rafce
   react app function const export  
   react 快速鍵 名稱 函式型 變數宣告 輸出位置寫在下面
