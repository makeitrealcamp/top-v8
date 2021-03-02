import logo from './logo.svg';
import Button from './components/Button'
import Heading from './components/Heading'
import Paragraph from './components/Paragraph'
import Spinner from 'react-bootstrap/Spinner'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Spinner animation="grow" />
        <Button>Click</Button>
        <Button primary>Click</Button>
        <Heading />
        <Heading light />
        <Paragraph>lorem ipsum dolor sit amet</Paragraph>
        <Paragraph light>lorem ipsum dolor sit amet</Paragraph>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
