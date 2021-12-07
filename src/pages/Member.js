import React, { useState, useEffect } from 'react'

function Member(props) {
  const [members, setMembers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  async function getMembers() {
    // 開始仔入資料 先出現spinner
    setIsLoading(true)

    // 要使用try-catch來作錯誤處理
    // try {
    //   // 從伺服器得到資料
    //   const response = await fetch(
    //     'http://localhost:5555/users',
    //     { method: 'get' }
    //   )

    //   // ok只能判斷201-299漲態馬的情況
    //   if (response.ok) {
    //     // 頗析資料為js的數值
    //     const data = await response.json()

    //     // 設定資料到member狀態
    //     setMembers(data)
    //   }

    //   // 最後關起spinner 改呈現真正資料
    //   setTimeout(() => {
    //     setIsLoading(false)
    //   }, 3000)
    // } catch (error) {
    //   // 發生錯誤地處理狀態
    //   alert('無法取得伺服器資料 請稍後再試')
    //   console.log(error)
    // }
    alert('我進來了')
  }

  // componentDidMount
  useEffect(() => {
    getMembers()
  })

  const display = (
    <table className="table">
      <tbody>
        {members.length > 0 &&
          members.map((v, i) => {
            return (
              <tr key={i}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.email}</td>
                <td>{v.usename}</td>
                <td>{v.password}</td>
              </tr>
            )
          })}
      </tbody>
    </table>
  )

  const spinner = (
    <>
      <div
        className="spinner-grow text-success"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
      <div
        className="spinner-grow text-danger"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
      <div
        className="spinner-grow text-warning"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </>
  )

  return (
    <>
      <h1>會員管理</h1>
    </>
  )
}

export default Member
