import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'

// 頁面切換時要用卷軸讓頁面回到最上方
function ScrollToTop({ children, history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0)
    })
    return () => {
      unlisten()
    }
  }, [])

  return <>{children}</>
}

export default withRouter(ScrollToTop)

// class ScrollToTop extends React.Component {
//   componentDidUpdate(prevProps) {
//     if (this.props.location !== prevProps.location) {
//       window.scrollTo(0, 0)
//     }
//   }

//   render() {
//     return this.props.children
//   }
// }

// export default withRouter(ScrollToTop)
