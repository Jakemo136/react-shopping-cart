import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'
import CartHeader from './components/CartHeader'
import CartFooter from './components/CartFooter'
import CartItems from './components/CartItems'
import AddItem from './components/AddItem'


class App extends Component {
  state = { 
    products: [ 
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ],
    cartItemsList: [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ],
    copyright: '2019'    
  }

  updateCartItems = (qty, productId) => {
    // double equals forces type coercion (in this case, from string to int)
    let checkItem = this.state.cartItemsList.filter(item => item.product.id == productId)

    if (checkItem.length === 1) {
      let cart = this.state.cartItemsList
      let cartItem = cart.filter(item => item.product.id == productId)[0]
      cartItem.quantity += parseInt(qty)
      
      this.setState({...this.state.cartItemsList, cartItem})
    } else {
      let productToAdd = this.state.products.find(product => product.id == productId)
      let newItem = {
        id: this.state.cartItemsList.length + 1,
        product: productToAdd,
        quantity: qty
      }
      
      this.setState({cartItemsList: [...this.state.cartItemsList, newItem]})  
    }
  }

  render() {
    return (
      <div className="App">
        <CartHeader />
        <CartItems cartItemsList={this.state.cartItemsList}/>
        <AddItem products={this.state.products} updateCartItems={this.updateCartItems}/>
        <CartFooter copyright={this.state.copyright}/>
      </div>
    )
  }
}

export default App
