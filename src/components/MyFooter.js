import React from 'react'
import { withRouter } from 'react-router-dom'

function MyFooter(props) {
  console.log(props)
  if (props.location.pathname === '/login') return <></>
  return (
    <>
      <footer className="footer mt-auto py-3">
        <div className="container">
          <span className="text-muted">
            place sticly footer conteint here
          </span>
        </div>
      </footer>
    </>
  )
}

export default withRouter(MyFooter)
