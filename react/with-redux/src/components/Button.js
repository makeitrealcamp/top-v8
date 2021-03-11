function Button({ children, onClick }) {
  // console.log(props)
  return (
    <button
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
