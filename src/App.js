import './App.css'
import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      total: 0,
      total2: 0,
      total3: 0,
    }
  }

  render() {
    return (
      <>
        <h1
          onClick={() => {
            this.setState({
              total: this.state.total + 1,
              total2: this.state.total2 + 2,
              total3: this.state.total3 + 5,
            })
          }}
        >
          {this.state.total}
        </h1>
        <h1>{this.state.total2}</h1>
        <h1>{this.state.total3}</h1>
      </>
    )
  }
}

export default App
