import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    IncrementCount() {
        // this.setState({
        //     count: this.state.count +1
        // },
        // () => {
        //     console.log('Callback value', this.state.count)
        // }
        // )
        // console.log(this.state.count)

        this.setState((prevState) => ({
            count: prevState.count +1
        }))
        console.log(this.state.count)
    }

    MultiplyCount() {
        // this.setState({
        //     count: this.state.count * 2
        // }, () => {
        //     console.log('Callback value', this.state.count)
        // })

        this.setState((prevState) => ({
            count: prevState.count * 2
        }))
        console.log(this.state.count)
    }

    ResetCount() {
        this.setState({
            count: this.state.count = 0
        })
    }

  render() {
    return (
      <div>
        <div>count - {this.state.count}</div>
        <button onClick={() => this.IncrementCount()}>
            Press here to increase counter.
        </button>
        <button onClick={() => this.MultiplyCount()}>
            Press here to multiply counter by 2.
        </button>
        <button onClick={() => this.ResetCount()}>
            Press here to reset counter to 0.
        </button>
      </div>
    )
  }
}

export default Counter
