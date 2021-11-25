import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'

// 頁面切換時要用卷軸讓頁面回到最上方
function ScrollToTop(props) {
  console.log(props)
  const [preprops, setPreprops] = useState(
    props.location.pathname
  )

  useEffect(() => {
    if (props.location.pathname !== preprops) {
      setPreprops(props.location.pathname)
      window.scrollTo(0, 0)
    }
  }, [preprops])

  return props.children
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
