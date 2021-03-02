import './styles.css'

function Button({ children, primary }) {
  const classes = ['Button']

  if(primary) {
    classes.push('Button-primary')
  }

  return (
    <button
      className={classes.join(' ')}
      type="button"
    >
      {children}
    </button>
  )
}

export default Button
