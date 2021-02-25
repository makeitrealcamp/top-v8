import React from 'react'
import { data } from './data'
import Products from './components/Products'
import './App.css'
import { v4 as uuidv4 } from 'uuid'

class App extends React.Component {
  state = {
    name: '',
    description: '',
    price: 0,
    products: data,
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    const { name, description, price } = this.state
    const newProduct = {
      _id: uuidv4(),
      name,
      description,
      price,
    }

    this.setState({
      // products: [...this.state.products, newProduct]
      products: this.state.products.concat(newProduct)
    })
  }

  render() {
    const { name, description, price, products } = this.state
    return (
      <main className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={this.handleChange}
            value={name}
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            onChange={this.handleChange}
            value={description}
          />
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            onChange={this.handleChange}
            value={price}
          />
          <button
            type="submit"
          >
            Create
          </button>
        </form>
        <Products products={products} />
      </main>
    );
  }
}

export default App;
