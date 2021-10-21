import React from 'react'

class AppClass extends React.Component {
  constructor() {
    super()
    this.state = {
      total: 0,
    }
  }

  render() {
    return (
      <>
        <h1
          onClick={() => {
            this.setState({
              total: this.state.total + 12,
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
