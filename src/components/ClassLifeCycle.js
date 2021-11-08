import React from 'react'

class ClassLifeCycle extends React.Component {
  // 掛載(mounting) 第一次呈現時只會執行一次
  constructor(props) {
    super(props)
    this.state = { total: 0 }
    console.log('constructor')
  }

  // 掛載(mounting) 第一次呈現時只會執行一次
  //   可確保虛擬DOM元素已呈現在網頁上的一個重要方法
  componentDidMount() {
    console.log('componentDidMount')

    //   裡面可以使用一班的js或jquery的dom處理法
    let clickme = document.getElementById('clickme')
    console.log(clickme)
    clickme.addEventListener('click', function () {
      alert('你好')
    })
  }

  //   更新(updating)階段的生命週期方法
  //   需要更動state值或得到新的props值才會觸發
  componentDidUpdate() {
    console.log('componentDidUpdate')

    // 這裡可以得到最終更新的狀態值
    console.log('total(狀態):', this.state.total)
  }

  // 卸載（unmounting）階段
  // 0餘件從網頁上消失（移除）前才會觸發
  componentWillUnmount() {
    console.log('componentwillunmount')

    // 與componentDidMount會有成對使用的情況
    let clickme = document.getElementById('clickme')
    console.log(clickme)
    clickme.addEventListener('click', function () {
      alert('你好')
    })
  }

  //   掛載(mounting) + 更新(updating)
  render() {
    console.log('render')
    return (
      <>
        Class : LifeCycle
        {/* 利用id或class讓其他的程式獲取dom介面物件 */}
        <button id="clickme">按我一夏</button>
        <hr />
        {/* 觀察更希階段用 */}
        <h1
          onClick={() => {
            this.setState({ total: this.state.total + 1 })
          }}
        >
          {this.state.total}
        </h1>
      </>
    )
  }
}

export default ClassLifeCycle
