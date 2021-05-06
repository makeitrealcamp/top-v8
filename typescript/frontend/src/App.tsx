import React from 'react'
import './App.css';

// interface IPost {
//   id: number;
//   title: string;
//   description: string;
// }

// interface IState {
//   page: number;
//   posts: IPost[];
// }

// const initialState: IState = {
//   page: 1,
//   posts: [],
// }

// type ActionTypes =
//   { type: 'GET_POSTS', payload: IPost[] } |
//   { type: 'LOADING' }

// function reducer(state: IState, action: ActionTypes): IState {
//   switch(action.type) {
//     case 'GET_POSTS': {
//       return {
//         ...state,
//         posts: action.payload
//       }
//     }
//     default: {
//       return state
//     }
//   }
// }

// const [state, dispatch] = React.useReducer(reducer, initialState)

interface IGreet {
  name: string;
  age?: number;
}

// class Greet extends React.Component<IProps, IState>

// function Greet({ name }: { name: string }) {
// const Greet: React.FC<{ name: string }> = ({ name }) => {
function Greet({ name, age }: IGreet) {
  return <h1>hola {name} {age}</h1>
}

function Counter() {
  const [count, setCount] = React.useState<number>(0)

  return (
    <>
      <span>{count}</span>
      <button
        type="button"
        onClick={() => setCount(prevCount => prevCount + 1)}
      >
        Increment
      </button>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Greet name="Maria" age={24} />
      <Counter />
    </div>
  );
}

export default App;
