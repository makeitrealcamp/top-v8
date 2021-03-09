// import React from 'react'
import { useState } from 'react'
import Posts from './components/Posts'
import './App.css';

// class App extends React.Component {
//   state = {
//     count: 0,
//   }

//   handleClick = e => {
//     this.setState(prevState => ({
//       count: prevState.count + 1,
//     }))
//   }

//   render() {
//     const { count } = this.state
//     return (
//       <div className="App">
//         <button
//           type="button"
//           onClick={this.handleClick}
//         >
//           {count}
//         </button>
//       </div>
//     );
//   }
// }

// 1. Los hooks solo se pueden invocar desde un componente u otro hook
// 2. Los hooks siempre se deben ejecutar en el mismo orden
// 3. Los hooks siempre se invocan en el primer nivel de la función.
// 4. Los hooks siempre se tienen que nombrar con el prefijo use

function useCount() {
  const [count, setCount] = useState(0)

  function handleClick(e) {
    setCount(prevCount => prevCount + 1)
  }

  return { count, handleClick }
}

function App() {
  // const [count, setCount] = useState(0)
  // const [state, setState] = useState({
  //   email: '',
  //   password: '',
  // })

  // function handleChange(e) {
  //   const { value, name } = e.target
  //   setState(prevState => ({
  //     ...state,
  //     [name]: value,
  //   }))
  // }

  // if(count < 3) {
  //   const [name, setName] = useState('')
  // }

  const { count, handleClick } = useCount()

  return (
    <div className="App">
      <button
        type="button"
        // onClick={() => setCount(prevCount => prevCount + 1)}
        onClick={handleClick}
      >
        {count}
      </button>
      {count < 3 && <Posts count={count}/>}
    </div>
  );
}

export default App;
