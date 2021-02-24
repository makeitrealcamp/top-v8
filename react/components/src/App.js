import React from 'react'
import Card from './components/Card'
import Counter from './components/Counter'
import './App.css';

function App() {
  return (
    <main>
      <Counter title="Counter"/>
      <Card
        title="card"
        description="description card 1"
        number={1}
        darkMode
      >
        Hola card 1
      </Card>
      <Card
        title="card"
        description="description card 2"
        number={2}
      >
        Hola card 2
      </Card>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg/220px-Ash_Tree_-_geograph.org.uk_-_590710.jpg"
        alt="tree"
      />
    </main>
  )
  // return (
  //   <div>
  //     <h1 className="title" name="maria">Hola mundo</h1>
  //   </div>
  // );

  // return (
  //   React.createElement(
  //     'div',
  //     null,
  //     React.createElement(
  //       'h1',
  //       { className: 'title', name: 'maria' },
  //       'Hola mundo'
  //     )
  //   )
  // )
}

export default App;
