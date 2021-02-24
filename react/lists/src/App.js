import { users } from './data'
import User from './components/User'
import './App.css'

// &&
// ||

// true && false => false
// true && true => true
// false && true => false
// false && false => false

// 1 && 2 => 2
// const num = 0 && 2

// true || true => true
// true || false => true
// false || true => true
// false || false => false

// const num = props.num || 0

// !
// !null => true
// !!0 => false

// Big O notation
// O(n) => se ejecuta una vez por cada elemento del arreglo
// arr.push(1) => O(1)
// arr.unshift(1) => O(n)

function App() {
  return (
    <div className="App">
      {!!users && users.length > 0 && users.map(({ id, name, age }) => {
        return (
          <User
            key={id}
            name={name}
            age={age}
          />
        )
      })}
    </div>
  )
}

export default App;
