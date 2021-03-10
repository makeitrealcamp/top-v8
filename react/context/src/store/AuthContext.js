import { createContext, useState } from 'react'

export const AuthContext = createContext()
// AuthContext.Provider
// AuthContext.Cosumer

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  const handleLogin = () => {
    setIsAuthenticated(true)
    setCurrentUser({ name: 'Maria' })
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        currentUser,
        handleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
