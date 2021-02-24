import React from 'react'
import Button from './Button'

class Counter extends React.Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     count: 0,
  //   }

  //   this.handleClick = this.handleClick.bind(this)
  // }

  state = {
    count: 0,
    name: 'name'
  }

  // handleClick() {
  //   const { count } = this.state
  //   this.setState({ count: count + 1 })
  // }

  handleClick = () => {
    const { count } = this.state
    this.setState({ count: count + 1 })
  }

  render() {
    const { count } = this.state
    const { title } = this.props
    return (
      <>
        <h1>{title}</h1>
        <p>{count}</p>
        <Button handleClick={this.handleClick}>Increment</Button>
      </>
    )
  }
}

export default Counter
