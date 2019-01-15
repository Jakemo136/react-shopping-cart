import React from 'react';

const CartFooter = ({copyright}) => { 

    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">&copy; { copyright }</a>
        </nav>
      </div>
    )
}

export default CartFooter