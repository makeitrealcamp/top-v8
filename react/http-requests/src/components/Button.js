import React from 'react'

// class Button extends React.Component {
//   render() {
//     const { children, handleClick } = this.props
//     return (
//       <button
//         type="button"
//         onClick={handleClick}
//       >
//         {children}
//       </button>
//     )
//   }
// }

function Button({ children, handleClick }) {
  return (
    <button
      type="button"
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Button
