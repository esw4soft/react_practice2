import React, { useState } from 'react'
import { countries, townships, postcodes } from '../data'

function ZipCode() {
  console.log(countries)
  console.log(townships)
  console.log(postcodes)

  //   記錄資料陣列的索引職
  const [country, setCountry] = useState(-1)

  return (
    <>
      <h1>台灣郵遞區號連動下拉式選單元素</h1>
      <select
        value={country}
        onChange={(event) => {
          // 設定要轉換為數字
          setCountry(+event.target.value)
        }}
      >
        {/* 預設值為-1 */}
        <option value={-1}>請選擇縣市</option>
        {/* 從countries 提取縣市資料 索引值當作option的值 */}
        {countries.map((v, i) => (
          <option value={i}>{v}</option>
        ))}
      </select>
    </>
  )
}

export default ZipCode
