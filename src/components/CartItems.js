import React from 'react'
import CartItemComponent from './CartItemComponent'


const CartItems = ({cartItemsList}) => {

  return (
      <div className="container">
        <h1>Cart Items</h1>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-8">Product</div>
              <div className="col-md-2">Price</div>
              <div className="col-md-2">Quantity</div>
            </div>
          </div>
          {cartItemsList.map((item) => <CartItemComponent 
            key={item.id}
            name={item.product.name}
            priceInCents={item.product.priceInCents}
            quantity={item.quantity}
          />)}
        </div>
        <div>
          Total: ${cartItemsList.reduce((result, currentItem) => {
      return result + (currentItem.product.priceInCents * currentItem.quantity)
    }, 0).toFixed(2)/100}
        </div>
      </div>
  )
}

export default CartItems