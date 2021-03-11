import Counter from './components/Counter';
import Button from './components/Button';
import './App.css';
// import {connect} from 'react-redux';
import { useDispatch } from 'react-redux';
import { INCREMENT, DECREMENT } from './store';

// High Order Function o High Order Component
// function (Component) {
//   const enhacements = {}

//   return function (props) {
//     return (
//       <Component
//         {...props}
//         {...enhacements}
//       />
//     )
//   }
// }

// function App({ increment, decrement }) {
function App() {
  const dispatch = useDispatch()

  function increment() {
    dispatch({ type: INCREMENT })
  }

  return (
    <div className="App">
      <Counter />
      <Button
        onClick={increment}
      >
        Increment
      </Button>
      <Button
        onClick={() => dispatch({ type: DECREMENT })}
      >
        Decrement
      </Button>
    </div>
  );
}

export default App
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: INCREMENT }),
//     decrement: () => dispatch({ type: DECREMENT }),
//   }
// }

// export default connect(null, mapDispatchToProps)(App)
