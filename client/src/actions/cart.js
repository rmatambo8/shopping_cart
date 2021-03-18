import * as api from '../api';

// action creators

export const getCart = () => {
  return async (dispatch) => {
    try {
      const data = await api.getCart()
      const action = { type: "GET_CART", data };
      dispatch(action)
    } catch (error) {
      console.log(error.message);
    }
  }
}
export const addToCart = (item) => {
  return async dispatch => {
    try {
      const data = await api.addProductToCart(item)
      const action = { type: "ADD_ITEM_TO_CART", data };
      dispatch(action)
    } catch (error) {
      console.log(error.message);
    }
  }
}

export const checkout = () => {
  return async (dispatch) => {
    try {
      const data = await api.checkout()
      const action = { type: "CHECKOUT", data };
      dispatch(action)
    } catch (error) {
      console.log(error.message);
    }
  }
}