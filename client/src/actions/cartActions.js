import * as types from "../constants/actionTypes";

export const initCart = (cart) => {
  return {type: types.INIT_PRODUCTS, payload: {cart}};
}

export const addItem = (product) => {
  return {type: types.ADD_PRODUCT, payload: {product}}
}


