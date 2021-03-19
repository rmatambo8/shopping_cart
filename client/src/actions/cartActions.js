import axios from 'axios';

export const cartReceived = (cart) => {
  return {type: "CART_RECEIVED", payload: { cart } };
};

export const addToCart = (item) => {
  return {type: "ADD_TO_CART", payload: { item }};
};

export const checkout = () => {
  return async dispatch => {
    axios.get('/api/checkout')
    .then(res => {
      dispatch({ type: "CHECKOUT" });
    });
  }
}