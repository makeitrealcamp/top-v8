function Button({ children, type }) {
  return (
    <button
      type={type}
      disabled={children.length < 5 && true}
      data-testid="button"
    >
      {children}
    </button>
  )
}

export default Button
