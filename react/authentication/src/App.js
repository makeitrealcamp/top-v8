import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Signin from './pages/Signin';
import Private from './pages/Private';
import './App.css';

function PrivateRoute(props) {
  const token = localStorage.getItem('token')

  if(!token) return <Redirect to="/login" />
  return <Route {...props} />
}

function App() {
  function handleClick() {
    localStorage.clear()
  }

  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/private">Private</Link>
          <button type="button" onClick={handleClick}>Logout</button>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Signup} />
          <Route exact path="/login" component={Signin} />
          <PrivateRoute exact path="/private" component={Private} />
        </Switch>
        <footer>Made with love by MiR</footer>
      </Router>
    </div>
  );
}

export default App;
