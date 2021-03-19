import React from 'react';
import { checkout } from '../actions/cartActions';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const Header = ({ cart }) => {
  const dispatch = useDispatch();

  const CartItem = ({item}) => {
    return (
      <tr>
        <th>{item.title}</th>
        <th>{item.quantity}</th>
        <th>{item.price}</th>
      </tr>
    );
  }

  const CartItems = ({cart}) => {

    return (
      <table className="cart-items">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => <CartItem item={item} key={item.id}/>)}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="total">Total: ${cart.reduce((sum, {price, quantity}) => sum + (price*quantity), 0).toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    );
  }

  const handleCheckout = (e) => {
		e.preventDefault();
    dispatch(checkout());
	}

  return (
    <header>
      <h1>The Shop!</h1>
      <div className="cart">
        <h2>Your Cart</h2>
        {cart.length === 0 ?
          <React.Fragment>
            <p>Your cart is empty</p>
            <p>Total: $0</p>
            <a href="#" className="button checkout disabled">Checkout</a>
          </React.Fragment>
          :
          <React.Fragment>
            <CartItems cart={cart} />
            <a href="#" onClick={handleCheckout} className="button checkout">Checkout</a>
          </React.Fragment>
        }
      </div>
    </header>
  )
}

export default Header;