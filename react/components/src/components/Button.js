import React from 'react'

function Button({ children, handleClick }) {
  return (
    <button
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

// export { Button }
// import { Button } from '../path/to/file'

export default Button
// import Button from '../path/to/file'
// import LoQueSea from '../path/to/file'
