import { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import './App.css';

const GET_USERS = gql`
  {
    users {
      id
      name
      age
    }
  }
`

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $age: Int!) {
    createUser(name: $name, age: $age) {
      id
      name
      age
    }
  }
`

function App() {
  const { data, loading, error } = useQuery(GET_USERS)
  const [ createUser, user ] = useMutation(CREATE_USER)
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)

  function handleSubmit(e) {
    e.preventDefault()
    console.log(name, age)

    createUser({ variables: { name, age: +age } })
  }

  console.log(user)

  if(loading) return <p>Loading...</p>
  if(error) return <p>Somenthing went wrong</p>
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <label htmlFor="age">Age</label>
        <input
          type="text"
          id="age"
          name="age"
          onChange={e => setAge(e.target.value)}
          value={age}
        />
        <button>Create user</button>
      </form>
      {!!data && data.users && data.users.length > 0 && data.users.map(user => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.age}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
