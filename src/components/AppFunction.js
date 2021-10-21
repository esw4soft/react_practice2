import React, { useState } from 'react'

function AppFunction(props) {
  const [total, setTotal] = useState(props.initValue)
  console.log(props)
  return (
    <>
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default AppFunction
