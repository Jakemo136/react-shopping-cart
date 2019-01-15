import React, { Component } from 'react'

class AddItem extends Component {
  
  state = {
    quantity: 0,
    productId: 0
  }
  
  onSubmit = (e) => {
    e.preventDefault()
    this.props.updateCartItems(this.state.quantity, this.state.productId)
  }
  
  render () {
    return (
      <div>
        <form className="container" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input type="number" className="form-control" id="quantity" value={this.state.quantity} onChange={(e)=> this.setState({quantity: e.target.value})}/>
          </div>

          <div className="form-group">
            <label htmlFor="product">Product</label>
            <select id="product" className="form-control" value={this.state.productId} onChange={(e)=> this.setState({productId: e.target.value})}>
              <option>Choose...</option>
              {this.props.products.map(product => <option key={product.id} value={product.id}>{product.name}</option> )}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default AddItem