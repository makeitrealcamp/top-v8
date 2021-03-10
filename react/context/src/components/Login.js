import { useContext } from 'react'
import { AuthContext } from '../store/AuthContext'

function Login() {
  const foo = useContext(AuthContext)
  // const value = useContext(AuthContext)
  // const theme = useContext(ThemeContext)
  // const posts = useContext(PostsContext)

  return (
    /*
    <AuthContext.Consumer>
      {(value) => (
        <button
          type="button"
          onClick={value.handleLogin}
        >
          Login
        </button>
      )}
    </AuthContext.Consumer>
    */
    <button
      type="button"
      onClick={foo.handleLogin}
    >
      Login
    </button>
  )
}

export default Login
