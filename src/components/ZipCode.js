import React, { useState } from 'react'
import { countries, townships, postcodes } from '../data'

function ZipCode() {
  console.log(countries)
  console.log(townships)
  console.log(postcodes)

  //   記錄資料陣列的索引職
  const [country, setCountry] = useState(-1)
  const [township, setTownship] = useState(-1)

  return (
    <>
      <h1>台灣郵遞區號連動下拉式選單元素</h1>
      <select
        value={country}
        onChange={(event) => {
          // 設定要轉換為數字
          setCountry(+event.target.value)
          setTownship(-1)
        }}
      >
        {/* 預設值為-1 */}
        <option value={-1}>請選擇縣市</option>
        {/* 從countries 提取縣市資料 索引值當作option的值 */}
        {/* key值是react要做最佳化用的 */}
        {countries.map((v, i) => (
          <option value={i} key={i}>
            {v}
          </option>
        ))}
      </select>
      <select
        value={township}
        onChange={(event) => {
          setTownship(+event.target.value)
        }}
      >
        <option value={-1}>請選則區玉</option>
        {/* 從township提取區域資料 索引值當作option的值 */}
        {/* 要檢查country會有-1的情況country大於-1才要執行 */}
        {country > -1 &&
          townships[country].map((v, i) => (
            <option value={i} key={i}>
              {v}
            </option>
          ))}
      </select>
      <span>
        {/* 當縣市（country）和區域（township）同時有>-1的值時 才顯示postcode */}
        {/* 條件 ＆＆ 求值呈現 相當於 if(條件)求值呈現 的簡寫法 只有react JSX 中才可以用 */}
        {country > -1 && township > -1 && postcodes[country][township]}
      </span>
    </>
  )
}

export default ZipCode
