import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import Products from './components/Products'
import Form from './components/Form'
import { data } from './data'
import './App.css'

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

  createNewProduct = e => {
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
      products: this.state.products.concat(newProduct),
      name: '',
      description: '',
      price: 0,
    })
  }

  deleteProduct = _id => e => {
    this.setState({
      products: this.state.products.filter((el, i, arr) => {
        return _id !== el._id
      })
    })
  }

  deleteAll = e => {
    this.setState({
      products: []
    })
  }

  render() {
    const {
      name,
      description,
      price,
      products,
    } = this.state
    return (
      <main className="App">
        <Form
          name={name}
          description={description}
          price={price}
          handleChange={this.handleChange}
          createNewProduct={this.createNewProduct}
        />
        <button
          type="button"
          onClick={this.deleteAll}
        >
          Delete All
        </button>
        <Products
          products={products}
          deleteProduct={this.deleteProduct}
        />
      </main>
    );
  }
}

export default App;
