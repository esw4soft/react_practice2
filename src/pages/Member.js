import React, { useState, useEffect } from 'react'

function Member(props) {
  const [members, setMembers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  async function getMembers() {
    // 開始仔入資料 先出現spinner
    setIsLoading(true)

    // 要使用try-catch來作錯誤處理
    try{
      // 從伺服器得到資料
    }
  }
  return (
    <>
      <h1>會員管理</h1>
    </>
  )
}

export default Member
