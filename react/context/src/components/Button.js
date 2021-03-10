import React from 'react'

// Render props
class Count extends React.Component {
  state = {
    count: 0,
  }

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    return this.props.children(this.state.count, this.handleClick)
  }
}

function Button() {
  return (
    <Count>
      {(count, handleClick) => {
        return (
          <button
            type="button"
            onClick={handleClick}
          >
            {count}
          </button>
        )
      }}
    </Count>
  )
}

export default Button
