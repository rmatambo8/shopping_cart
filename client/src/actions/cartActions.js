import * as types from "../constants/actionTypes";

export const initCart = (cart) => {
  return {type: types.INIT_CART, payload: {cart}};
}

export const newItem = (product) => {
  return {type: types.ADD_ITEM, payload: {product}};
}

export const checkout = () => {
  return {type: types.CHECKOUT};
}
