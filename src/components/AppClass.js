import React from 'react'

class AppClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: props.initValue,
    }
    console.log(props)
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
