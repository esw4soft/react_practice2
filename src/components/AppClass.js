import React from 'react'

class AppClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0,
    }
    console.log(props)
  }

  // 初始化
  componentDidMount() {
    this.setState({
      total: this.props.initValue,
    })
  }

  // 更新時
  componentDidUpdate(preProps) {
    if (this.props.initValue !== preProps.initValue) {
      this.setState({
        total: this.props.initValue,
      })
    }
  }

  render() {
    // console.log(this.props)
    return (
      <>
        <h1
          onClick={() => {
            this.setState({
              total: this.state.total + 2,
            })
          }}
        >
          {this.state.total}
        </h1>
      </>
    )
  }
}

export default AppClass
