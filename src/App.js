import React, { useState, useEffect, useRef } from 'react'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'

import { data } from './data'

function App() {
  const [student, setStudent] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // componentDidMount
  useEffect(() => {
    // 開始仔入資料 先出現spinner
    setIsLoading(true)

    // 從伺服器得到資料 然後設定到student狀態
    setStudent(data)

    // 最後關起spinner 改呈現真正資料
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  const spinner = (
    <>
      <div className="spinner-grow text-success" role="status"></div>
      <div className="spinner-grow text-danger" role="status"></div>
      <div className="spinner-grow text-warning" role="status"></div>
      <span className="sr-only">Loading...</span>
    </>
  )

  const display = (
    <table className="table table-bordered table-striped">
      <thead className="thead-light">
        <th>做好</th>
        <th>姓名</th>
        <th>生日</th>
      </thead>
      <tbody>
        {student.map((v, i) => (
          <tr key={i}>
            <td>{v.id}</td>
            <td>{v.name}</td>
            <td>{v.birth}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )

  return (
    <>
      <MyNavbar />
      <MainContent>{isLoading ? spinner : display}</MainContent>
      <MyFooter />
    </>
  )
}

export default App
