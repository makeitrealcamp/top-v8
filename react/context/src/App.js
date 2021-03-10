import Button from './components/Button'
import { AuthProvider } from './store/AuthContext'
import './App.css';
import NavBar from './components/NavBar';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Button />
      <AuthProvider>
        <NavBar />
        <Login />
      </AuthProvider>
    </div>
  );
}

export default App;
