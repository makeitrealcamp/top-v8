import './App.css';

function Title({ name }) {
  return (
    <h1>Hola {name}</h1>
  )
}

// JSX - JavaScript and XML
// 1. Todas las etiquetas se deben cerrar explicitamente
// 2. Un componente solo puede retornar un elemento adyacente
// 3. Props no pueden usar palabras reservedas de JavaScript
// class -> className
// for -> htmlFor

function App() {
  return (
    // <img></img>
    // <img src />
    <div className="App" hola="mundo">
      <Title name="Maria"></Title>
      <Title name="Juan" />
      <Title name="Ana" />
      <Title name="Martin" />
      <p>Hola mundo</p>
      <Title name="Martin" />
      <p>Desde MIR</p>
      <Title name="Martin" />
    </div>
  );
}

export default App;
