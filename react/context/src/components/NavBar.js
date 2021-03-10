import React from 'react'
import { AuthContext } from '../store/AuthContext'

// function NavBar() {
//   const auth = useContext(AuthContext)

//   return (
//     <nav>
//       <h1>Logo</h1>
//       <p>{auth.currentUser && auth.currentUser.name}</p>
//       <span>{auth.isAuthenticated ? 'authenticated' : 'not authenticated'}</span>
//     </nav>
//   )
// }

class NavBar extends React.Component {
  static contextType = AuthContext

  render() {
    const { currentUser, isAuthenticated } = this.context
    return (
      <nav>
        <h1>Logo</h1>
        {/*
          <AuthContext.Consumer>
            {({ currentUser, isAuthenticated }) => (
              <>
                <span>{currentUser}</span>
                <span>{isAuthenticated ? 'authenticated' : 'not authenticated'}</span>
              </>
            )}
          </AuthContext.Consumer>
        */}
        <>
          <p>{currentUser && currentUser.name}</p>
          <span>{isAuthenticated ? 'authenticated' : 'not authenticated'}</span>
        </>
      </nav>
    )
  }
}

export default NavBar
