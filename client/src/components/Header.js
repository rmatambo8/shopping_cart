import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkout, getCart } from '../actions/cart';

const Header = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const onCheckout = async (e) => {
		e.preventDefault();
		dispatch(checkout())
	}

  useEffect(() => {
    dispatch(getCart())
  }, [dispatch])
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
            <a href="#" onClick={onCheckout} className="button checkout">Checkout</a>
          </React.Fragment>
        }
      </div>
    </header>
  )
}

export default Header;