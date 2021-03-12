import TextArea from './components/TextArea'
import Counter from './components/Counter'
import Button from './components/Button'
import Posts from './components/Posts'
import Text from './components/Text'
import './App.css';
// import {connect} from 'react-redux';
import { useDispatch } from 'react-redux';
// import { INCREMENT, DECREMENT } from './store';
import { increment, decrement } from './store/countReducer';

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

  // function increment() {
  //   dispatch({ type: INCREMENT })
  // }

  return (
    <div className="App">
      <Counter />
      <Button
        onClick={() => dispatch(increment())}
      >
        Increment
      </Button>
      <Button
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </Button>
      <Text />
      <TextArea />
      <Posts />
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

// HOC
// function connect(mapStateToProps, mapDispatchToProps) {
//   const state = store.getState()
//   const stateProps = mapStateToProps(state)
//   const dispatchProps = mapDispatchToProps(store.dispatch)

//   return function (Component) {
//     return function App(props) {
//       return (
//         <Component
//           {...props}
//           {...stateProps}
//           {...dispatchProps}
//         />
//       )
//     }
//   }
// }
