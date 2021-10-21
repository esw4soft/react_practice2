import React, { useState, useEffect } from 'react'

function AppFunction(props) {
  const [total, setTotal] = useState(0)
  console.log(props)

  useEffect(() => {
    setTotal(props.initValue)
  }, [props.initValue])

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
