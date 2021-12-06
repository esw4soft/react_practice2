import React, { useContext } from 'react'

// 要從app導入建立的ThemeContext

import { ThemeContext } from '../App'

function MyUseContext() {
  // 使用useContext通常用在不會經常變動的值 例如樣式
  // 得到目前的ThemeContext
  const theme = useContext(ThemeContext)

  return (
    <button
      style={{
        background: theme.background,
        color: theme.foreground,
      }}
    >
      test23
    </button>
  )
}

export default MyUseContext
