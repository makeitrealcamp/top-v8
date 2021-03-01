import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Posts from './pages/Posts'
import Post from './pages/Post'
// import NotFound from './pages/NotFound'
import './App.css';

// URL
// protocolo - dominio - :puerto - ruta - (opt) ?queryString - (opt) hash
// https://makeitreal.camp/top?student=maria&age=24#id
// http://127.0.0.1:3000/route/to/resource

// Parametros de ruta
// https://github.com/:username/:repo
// https://github.com/makeitrealcamp/top-v8

// Single Page Application - SPA

function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/posts">Posts</Link></li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/about/:username" component={About} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/posts/:id" component={Post} />
        {/*<Route path="*" component={NotFound} />*/}
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
